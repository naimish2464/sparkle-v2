import { useReducedMotion } from "motion/react";

export type JewelryCarouselItem = {
  src: string;
  alt: string;
};

type JewelryHorizontalCarouselProps = {
  items: JewelryCarouselItem[];
  className?: string;
};

/**
 * Premium horizontal jewellery track — equal boxes, no overlap,
 * slow seamless infinite scroll. Pauses on hover.
 */
export function JewelryHorizontalCarousel({
  items,
  className = "",
}: JewelryHorizontalCarouselProps) {
  const prefersReducedMotion = !!useReducedMotion();
  const loopItems = [...items, ...items];

  if (items.length === 0) return null;

  return (
    <div
      className={`jh-carousel${prefersReducedMotion ? " is-static" : ""} ${className}`}
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
                <img
                  src={item.src}
                  alt={isDuplicate ? "" : item.alt}
                  loading={index < 6 ? "eager" : "lazy"}
                  decoding="async"
                  draggable={false}
                  className="jh-item-img"
                />
              </figure>
            );
          })}
        </div>
      </div>
      <p className="sr-only">Jewellery collection scrolling horizontally</p>
    </div>
  );
}
