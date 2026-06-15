const SCROLL_LOCK_CLASS = "scroll-locked";

/** Clears any inline or class-based scroll lock on html/body. */
export function ensurePageScrollable() {
  const { documentElement: html, body } = document;

  html.classList.remove(SCROLL_LOCK_CLASS);
  html.style.overflow = "";
  html.style.overflowY = "";
  html.style.overflowX = "";

  body.classList.remove(SCROLL_LOCK_CLASS);
  body.style.overflow = "";
  body.style.overflowY = "";
  body.style.overflowX = "";
  body.style.position = "";
  body.style.top = "";
  body.style.left = "";
  body.style.right = "";
  body.style.width = "";
  body.style.paddingRight = "";
}

export function lockPageScroll() {
  document.body.classList.add(SCROLL_LOCK_CLASS);
  document.body.style.overflow = "hidden";
}

export function unlockPageScroll() {
  document.body.classList.remove(SCROLL_LOCK_CLASS);
  document.body.style.overflow = "";
}

export function initPageScrollGuards() {
  ensurePageScrollable();

  window.addEventListener("pageshow", ensurePageScrollable);
  window.addEventListener("load", ensurePageScrollable);

  return () => {
    window.removeEventListener("pageshow", ensurePageScrollable);
    window.removeEventListener("load", ensurePageScrollable);
    ensurePageScrollable();
  };
}
