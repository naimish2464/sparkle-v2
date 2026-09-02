import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type KeyboardEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";

export type JewelryCarouselItem = {
  src: string;
  alt: string;
};

type JewelryRingCarouselProps = {
  items: JewelryCarouselItem[];
  className?: string;
  /** Radius of the 3D ring in px (desktop baseline). */
  radius?: number;
  /** Card width in px (desktop baseline). */
  cardWidth?: number;
};

type ItemEls = {
  figure: HTMLElement;
  img: HTMLImageElement;
};

/**
 * 3D circular product ring — drag / swipe rotates the whole ring.
 * Front item is larger & sharper; side/back items recede in scale & opacity.
 * Rotation is applied via DOM for smooth 60fps performance.
 */
export function JewelryRingCarousel({
  items,
  className = "",
  radius = 280,
  cardWidth = 168,
}: JewelryRingCarouselProps) {
  const count = items.length;
  const angleStep = 360 / Math.max(count, 1);

  const stageRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const itemElsRef = useRef<ItemEls[]>([]);
  const rotationRef = useRef(0);
  const velocityRef = useRef(0);
  const draggingRef = useRef(false);
  const lastXRef = useRef(0);
  const lastTRef = useRef(0);
  const rafRef = useRef(0);
  const reducedMotionRef = useRef(false);
  const activeIndexRef = useRef(0);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const paint = useCallback(
    (deg: number) => {
      const track = trackRef.current;
      if (!track) return;

      track.style.transform = `rotateY(${deg}deg)`;

      let bestIdx = 0;
      let bestAbs = 180;

      for (let i = 0; i < count; i++) {
        const itemAngle = i * angleStep;
        const relative = ((itemAngle + deg) % 360 + 360) % 360;
        const signed = relative > 180 ? relative - 360 : relative;
        const abs = Math.abs(signed);
        const depthT = Math.min(abs / 180, 1);
        const scale = 1.14 - depthT * 0.48;
        const opacity = 1 - depthT * 0.48;
        const zIndex = Math.round(200 - abs);

        const els = itemElsRef.current[i];
        if (els) {
          els.figure.style.transform = `rotateY(${itemAngle}deg) translateZ(var(--jr-radius)) rotateY(${-(itemAngle + deg)}deg) scale(${scale})`;
          els.figure.style.opacity = String(opacity);
          els.figure.style.zIndex = String(zIndex);
        }

        if (abs < bestAbs) {
          bestAbs = abs;
          bestIdx = i;
        }
      }

      for (let i = 0; i < count; i++) {
        itemElsRef.current[i]?.figure.classList.toggle("is-front", i === bestIdx);
      }

      if (bestIdx !== activeIndexRef.current) {
        activeIndexRef.current = bestIdx;
        setActiveIndex(bestIdx);
      }
    },
    [angleStep, count]
  );

  // Collect item element refs after mount / items change
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const figures = Array.from(
      track.querySelectorAll<HTMLElement>(".jewelry-ring-item")
    );
    itemElsRef.current = figures.map((figure) => ({
      figure,
      img: figure.querySelector("img") as HTMLImageElement,
    }));
    paint(rotationRef.current);
  }, [items, paint]);

  // Inertia + gentle auto-drift when idle
  useEffect(() => {
    reducedMotionRef.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const tick = () => {
      if (!draggingRef.current) {
        let v = velocityRef.current;
        if (Math.abs(v) > 0.002) {
          rotationRef.current += v;
          velocityRef.current = v * 0.94;
          paint(rotationRef.current);
        } else if (!reducedMotionRef.current) {
          rotationRef.current += 0.012;
          velocityRef.current = 0;
          paint(rotationRef.current);
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [paint]);

  // Responsive radius via CSS custom properties on stage
  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;

    const update = () => {
      const w = el.clientWidth;
      const scale = Math.min(1, Math.max(0.55, w / 640));
      el.style.setProperty("--jr-radius", `${radius * scale}px`);
      el.style.setProperty("--jr-card-w", `${cardWidth * scale}px`);
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [radius, cardWidth]);

  const onPointerDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    draggingRef.current = true;
    setIsDragging(true);
    velocityRef.current = 0;
    lastXRef.current = e.clientX;
    lastTRef.current = performance.now();
  };

  const onPointerMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    const now = performance.now();
    const dx = e.clientX - lastXRef.current;
    const dt = Math.max(now - lastTRef.current, 1);
    const delta = dx * 0.28;
    rotationRef.current += delta;
    velocityRef.current = (delta / dt) * 16;
    lastXRef.current = e.clientX;
    lastTRef.current = now;
    paint(rotationRef.current);
  };

  const endDrag = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      /* already released */
    }
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") {
      e.preventDefault();
      velocityRef.current = 0;
      rotationRef.current -= angleStep;
      paint(rotationRef.current);
    } else if (e.key === "ArrowRight") {
      e.preventDefault();
      velocityRef.current = 0;
      rotationRef.current += angleStep;
      paint(rotationRef.current);
    } else if (e.key === "Home") {
      e.preventDefault();
      velocityRef.current = 0;
      rotationRef.current = 0;
      paint(rotationRef.current);
    }
  };

  if (count === 0) return null;

  return (
    <div
      ref={stageRef}
      className={`jewelry-ring ${isDragging ? "is-dragging" : ""} ${className}`}
      role="region"
      aria-roledescription="3D product carousel"
      aria-label="Custom jewellery collection. Drag or use arrow keys to rotate."
      tabIndex={0}
      onKeyDown={onKeyDown}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerCancel={endDrag}
    >
      <div className="jewelry-ring-scene">
        <div ref={trackRef} className="jewelry-ring-track">
          {items.map((item, i) => (
            <figure
              key={item.src + i}
              className="jewelry-ring-item"
              aria-hidden={i !== activeIndex}
            >
              <img
                src={item.src}
                alt={i === activeIndex ? item.alt : ""}
                draggable={false}
                loading={i < 4 ? "eager" : "lazy"}
                decoding="async"
                className="jewelry-ring-img"
              />
            </figure>
          ))}
        </div>
      </div>

      <p className="jewelry-ring-hint" aria-hidden="true">
        Drag to explore
      </p>

      <div className="sr-only" aria-live="polite" aria-atomic="true">
        Showing {items[activeIndex]?.alt}
      </div>
    </div>
  );
}
