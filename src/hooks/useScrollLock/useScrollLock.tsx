import { useIsomorphicEffect } from "..";

export const useScrollLock = (locked: boolean) => {
  useIsomorphicEffect(() => {
    const el = document.querySelector("html") as HTMLHtmlElement;

    if (locked) {
      el.style.setProperty("overflow", "hidden");
    } else {
      el.style.removeProperty("overflow");
    }
  }, [locked]);
};
