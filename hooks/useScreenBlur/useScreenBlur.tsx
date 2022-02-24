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
    const elem = document.querySelector("html") as HTMLElement;

    if (blur) {
      elem.style.transition = "filter 0.5s ease";
      elem.style.filter = `blur(${amount}px)`;
    } else {
      if (styleExists(elem, "filter")) {
        elem.style.filter = "blur(0px)";
      }
    }
  }, [blur]);
};
