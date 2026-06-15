/** Inject a one-time <link rel="preload"> for LCP-critical assets. */
export function preloadCriticalAsset(
  href: string,
  as: "image" | "video" | "font" | "fetch",
  options?: { type?: string; crossOrigin?: "" | "anonymous" | "use-credentials" }
) {
  if (typeof document === "undefined" || !href) return;

  if (document.head.querySelector(`link[rel="preload"][href="${href}"]`)) return;

  const link = document.createElement("link");
  link.rel = "preload";
  link.as = as;
  link.href = href;
  if (options?.type) link.type = options.type;
  if (options?.crossOrigin !== undefined) link.crossOrigin = options.crossOrigin;
  document.head.appendChild(link);
}
