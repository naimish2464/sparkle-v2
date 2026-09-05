import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "motion/react";
import {
  getRevealAnimate,
  getRevealInitial,
  getRevealTransition,
  REVEAL,
  useReveal,
} from "./useReveal";
import chartYellow from "../../../assests/images/c_and_i1.webp";
import chartPink from "../../../assests/images/c_and_i2.webp";
import chartBlue from "../../../assests/images/c_and_i3.webp";

const intensityScale = [
  "Intense",
  "Light",
  "Very Light",
  "Canary",
  "Fancy",
  "Fancy Vivid",
  "Fancy Deep",
];

const colorCharts = [
  {
    id: "yellow",
    src: chartYellow,
    alt: "Yellow diamond color scale and intensity classification chart",
    label: "Yellow",
  },
  {
    id: "pink",
    src: chartPink,
    alt: "Pink diamond color scale and intensity classification chart",
    label: "Pink",
  },
  {
    id: "blue",
    src: chartBlue,
    alt: "Blue diamond color scale and intensity classification chart",
    label: "Blue",
  },
];

export function ColorScaleIntensity() {
  const { ref: sectionRef, isInView, prefersReducedMotion } = useReveal();
  const initial = getRevealInitial(prefersReducedMotion);
  const animate = getRevealAnimate(isInView, prefersReducedMotion);
  const [activeChart, setActiveChart] = useState(colorCharts[0].id);
  const [zoomed, setZoomed] = useState(false);
  const [portalReady, setPortalReady] = useState(false);
  const active = colorCharts.find((c) => c.id === activeChart) ?? colorCharts[0];

  useEffect(() => {
    setPortalReady(true);
  }, []);

  useEffect(() => {
    if (!zoomed) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setZoomed(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [zoomed]);

  return (
    <section
      id="color-scale"
      ref={sectionRef}
      className="csi-section relative bg-white overflow-x-clip"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 xl:px-16 section-padding">
        <div className="csi-header text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-14">
          <motion.h2
            initial={initial}
            animate={animate}
            transition={getRevealTransition(prefersReducedMotion, {
              isInView,
            })}
            className="type-section-heading text-brand"
            style={{ willChange: isInView ? "auto" : "opacity, transform" }}
          >
            Color, Scale &amp; Intensity
          </motion.h2>

          <motion.div
            initial={
              prefersReducedMotion
                ? { opacity: 1 }
                : { opacity: REVEAL.opacityFrom }
            }
            animate={
              prefersReducedMotion || isInView
                ? { opacity: 1 }
                : { opacity: REVEAL.opacityFrom }
            }
            transition={getRevealTransition(prefersReducedMotion, {
              delay: 0.1,
              isInView,
            })}
            className="csi-gold-rule mx-auto mt-5 sm:mt-6 origin-center"
            aria-hidden="true"
          />
        </div>

        <motion.div
          initial={initial}
          animate={animate}
          transition={getRevealTransition(prefersReducedMotion, {
            delay: 0.1,
            isInView,
          })}
          className="csi-scale mb-8 sm:mb-10 lg:mb-14"
        >
          <ol className="csi-scale-list list-none m-0 p-0 flex flex-wrap items-center justify-center gap-y-3">
            {intensityScale.map((grade, index) => (
              <li key={grade} className="csi-scale-item inline-flex items-center">
                <span className="csi-scale-label">{grade}</span>
                {index < intensityScale.length - 1 && (
                  <span className="csi-scale-connector" aria-hidden="true" />
                )}
              </li>
            ))}
          </ol>
        </motion.div>

        <div className="csi-mobile-viewer">
          <div
            className="csi-tabs"
            role="tablist"
            aria-label="Diamond color charts"
          >
            {colorCharts.map((chart) => {
              const selected = chart.id === activeChart;
              return (
                <button
                  key={chart.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls={`csi-panel-${chart.id}`}
                  id={`csi-tab-${chart.id}`}
                  className={`csi-tab${selected ? " is-active" : ""}`}
                  onClick={() => setActiveChart(chart.id)}
                >
                  {chart.label}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.figure
              key={active.id}
              id={`csi-panel-${active.id}`}
              role="tabpanel"
              aria-labelledby={`csi-tab-${active.id}`}
              className="csi-mobile-panel"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, y: -6 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <figcaption className="csi-chart-caption">{active.label}</figcaption>
              <button
                type="button"
                className="csi-mobile-frame"
                onClick={() => setZoomed(true)}
                aria-label={`Enlarge ${active.label} color scale chart`}
              >
                <img
                  src={active.src}
                  alt={active.alt}
                  loading="lazy"
                  decoding="async"
                  className="csi-chart-img csi-chart-img--mobile"
                  width={941}
                  height={1672}
                  draggable={false}
                />
                <span className="csi-zoom-hint">Tap to enlarge</span>
              </button>
            </motion.figure>
          </AnimatePresence>
        </div>

        <div className="csi-gallery" role="list">
          {colorCharts.map((chart, index) => (
            <motion.figure
              key={chart.label}
              role="listitem"
              initial={initial}
              animate={animate}
              transition={getRevealTransition(prefersReducedMotion, {
                delay: REVEAL.stagger + index * 0.1,
                image: true,
                isInView,
              })}
              className="csi-chart"
              style={{ willChange: isInView ? "auto" : "opacity, transform" }}
            >
              <figcaption className="csi-chart-caption">{chart.label}</figcaption>
              <img
                src={chart.src}
                alt={chart.alt}
                loading="lazy"
                decoding="async"
                className="csi-chart-img"
                width={941}
                height={1672}
              />
            </motion.figure>
          ))}
        </div>
      </div>

      {portalReady &&
        createPortal(
          <AnimatePresence>
            {zoomed && (
              <motion.div
                key="csi-zoom"
                className="csi-zoom"
                role="dialog"
                aria-modal="true"
                aria-label={`${active.label} color scale chart`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <button
                  type="button"
                  className="csi-zoom-backdrop"
                  aria-label="Close enlarged chart"
                  onClick={() => setZoomed(false)}
                />
                <div className="csi-zoom-sheet">
                  <div className="csi-zoom-toolbar">
                    <p className="csi-zoom-title">{active.label} scale</p>
                    <button
                      type="button"
                      className="csi-zoom-close"
                      aria-label="Close"
                      onClick={() => setZoomed(false)}
                    >
                      Close
                    </button>
                  </div>
                  <div className="csi-zoom-scroll">
                    <img
                      src={active.src}
                      alt={active.alt}
                      className="csi-zoom-img"
                      draggable={false}
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </section>
  );
}
