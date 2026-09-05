import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
  type MouseEvent,
} from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

export type JewelryCarouselItem = {
  src: string;
  alt: string;
};

type JewelryHorizontalCarouselProps = {
  items: JewelryCarouselItem[];
  className?: string;
};

type RectBox = { top: number; left: number; width: number; height: number };

type ZoomState = {
  src: string;
  alt: string;
  origin: RectBox;
  target: RectBox;
};

function getCenteredTarget(origin: Pick<RectBox, "width" | "height">): RectBox {
  const maxW = Math.min(window.innerWidth * 0.88, 780);
  const maxH = Math.min(window.innerHeight * 0.78, 780);
  const aspect =
    origin.width > 0 && origin.height > 0
      ? origin.width / origin.height
      : 1;

  let width = maxW;
  let height = width / aspect;

  if (height > maxH) {
    height = maxH;
    width = height * aspect;
  }

  return {
    width,
    height,
    left: (window.innerWidth - width) / 2,
    top: (window.innerHeight - height) / 2,
  };
}

/**
 * Premium horizontal jewellery track — equal boxes, no overlap,
 * slow seamless infinite scroll. Pauses on hover.
 * Click/tap opens a FLIP-style zoom detail view.
 */
export function JewelryHorizontalCarousel({
  items,
  className = "",
}: JewelryHorizontalCarouselProps) {
  const prefersReducedMotion = !!useReducedMotion();
  const loopItems = [...items, ...items];
  const titleId = useId();
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const sourceElRef = useRef<HTMLElement | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const [zoom, setZoom] = useState<ZoomState | null>(null);
  const [portalReady, setPortalReady] = useState(false);
  const [isOffscreen, setIsOffscreen] = useState(false);

  useEffect(() => {
    setPortalReady(true);
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el || prefersReducedMotion) return;

    const io = new IntersectionObserver(
      ([entry]) => setIsOffscreen(!entry.isIntersecting),
      { rootMargin: "120px 0px", threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [prefersReducedMotion]);

  const closeZoom = useCallback(() => {
    setZoom(null);
  }, []);

  const openZoom = useCallback((item: JewelryCarouselItem, el: HTMLElement) => {
    const rect = el.getBoundingClientRect();
    const origin = {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
    };

    if (sourceElRef.current) {
      sourceElRef.current.classList.remove("is-zoomed-source");
    }
    el.classList.add("is-zoomed-source");
    sourceElRef.current = el;

    setZoom({
      src: item.src,
      alt: item.alt,
      origin,
      target: getCenteredTarget(origin),
    });
  }, []);

  const handleZoomExitComplete = useCallback(() => {
    if (sourceElRef.current) {
      sourceElRef.current.classList.remove("is-zoomed-source");
      sourceElRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (!zoom) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeZoom();
      }
    };

    window.addEventListener("keydown", onKeyDown);
    closeBtnRef.current?.focus({ preventScroll: true });

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [zoom, closeZoom]);

  const handleItemActivate = (
    item: JewelryCarouselItem,
    event: MouseEvent<HTMLButtonElement>
  ) => {
    const img = event.currentTarget.querySelector<HTMLElement>(".jh-item-img");
    if (!img) return;
    openZoom(item, img);
  };

  if (items.length === 0) return null;

  return (
    <div
      ref={rootRef}
      className={`jh-carousel${prefersReducedMotion ? " is-static" : ""}${
        zoom ? " is-zoomed" : ""
      }${isOffscreen ? " is-offscreen" : ""} ${className}`}
      role="region"
      aria-roledescription="carousel"
      aria-label="Custom jewellery collection"
    >
      <div className="jh-viewport">
        <div className="jh-track">
          {loopItems.map((item, index) => {
            const isDuplicate = index >= items.length;
            return (
              <figure
                key={`${item.src}-${index}`}
                className="jh-item"
                aria-hidden={isDuplicate}
              >
                <button
                  type="button"
                  className="jh-item-hit"
                  tabIndex={isDuplicate ? -1 : 0}
                  aria-label={
                    isDuplicate ? undefined : `View larger: ${item.alt}`
                  }
                  onClick={(event) => handleItemActivate(item, event)}
                >
                  <img
                    src={item.src}
                    alt={isDuplicate ? "" : item.alt}
                    loading={index < 4 ? "eager" : "lazy"}
                    decoding="async"
                    width={260}
                    height={260}
                    draggable={false}
                    className="jh-item-img"
                  />
                </button>
              </figure>
            );
          })}
        </div>
      </div>
      <p className="sr-only">
        Jewellery collection scrolling horizontally. Select a piece to enlarge.
      </p>

      {portalReady &&
        createPortal(
          <AnimatePresence onExitComplete={handleZoomExitComplete}>
            {zoom && (
              <motion.div
                key="jh-zoom"
                className="jh-zoom"
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                initial={false}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
                transition={{ duration: prefersReducedMotion ? 0.2 : 0.55 }}
              >
                <motion.div
                  className="jh-zoom-backdrop"
                  aria-hidden="true"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: prefersReducedMotion ? 0.12 : 0.3 }}
                  onClick={closeZoom}
                />

                <p id={titleId} className="sr-only">
                  {zoom.alt}
                </p>

                <motion.img
                  src={zoom.src}
                  alt={zoom.alt}
                  className="jh-zoom-img"
                  draggable={false}
                  initial={
                    prefersReducedMotion
                      ? {
                          top: zoom.target.top,
                          left: zoom.target.left,
                          width: zoom.target.width,
                          height: zoom.target.height,
                          opacity: 0,
                        }
                      : {
                          top: zoom.origin.top,
                          left: zoom.origin.left,
                          width: zoom.origin.width,
                          height: zoom.origin.height,
                          opacity: 1,
                        }
                  }
                  animate={{
                    top: zoom.target.top,
                    left: zoom.target.left,
                    width: zoom.target.width,
                    height: zoom.target.height,
                    opacity: 1,
                  }}
                  exit={
                    prefersReducedMotion
                      ? { opacity: 0 }
                      : {
                          top: zoom.origin.top,
                          left: zoom.origin.left,
                          width: zoom.origin.width,
                          height: zoom.origin.height,
                          opacity: 1,
                        }
                  }
                  transition={
                    prefersReducedMotion
                      ? { duration: 0.18 }
                      : {
                          type: "spring",
                          stiffness: 280,
                          damping: 28,
                          mass: 0.85,
                        }
                  }
                />

                <motion.button
                  ref={closeBtnRef}
                  type="button"
                  className="jh-zoom-close"
                  aria-label="Close"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{
                    duration: 0.2,
                    delay: prefersReducedMotion ? 0 : 0.08,
                  }}
                  onClick={closeZoom}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    aria-hidden="true"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.75"
                    strokeLinecap="round"
                  >
                    <path d="M6 6l12 12M18 6L6 18" />
                  </svg>
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </div>
  );
}
