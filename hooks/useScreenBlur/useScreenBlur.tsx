import { useIsomorphicEffect } from "..";

const styleExists = (el: HTMLElement, style: string) => {
  if (
    el.getAttribute("style") &&
    el.getAttribute("style")?.indexOf(`${style}:`) !== -1
  ) {
    return true;
  } else {
    return false;
  }
};

export const useScreenBlur = (blur: boolean, amount = 15) => {
  useIsomorphicEffect(() => {
    const elem = document.querySelector("body") as HTMLBodyElement;

    if (blur) {
      elem.style.filter = `blur(${amount})`;
    } else {
      if (styleExists(elem, "filter")) {
        elem.style.filter = "unset";
      }
    }
  }, [blur]);
};
