export const nativeSmoothScrollTo = (elem: Element | HTMLElement) => {
  window.scroll({
    behavior: "smooth",
    left: 0,
    top: elem.getBoundingClientRect().top + window.pageYOffset,
  });
};

export const smoothScrollAsync = (to: number, duration: number) => {
  const element =
      window.document.scrollingElement || window.document.documentElement,
    start = element.scrollTop,
    change = to - start,
    startDate = +new Date();

  const easeInOutQuad = (t: any, b: any, c: any, d: any) => {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  return new Promise<void>((resolve, _reject) => {
    const animateScroll = () => {
      const currentDate = +new Date();
      const currentTime = currentDate - startDate;
      element.scrollTop = parseInt(
        easeInOutQuad(currentTime, start, change, duration)
      );
      if (currentTime < duration) {
        requestAnimationFrame(animateScroll);
      } else {
        resolve();
        element.scrollTop = to;
      }
    };

    animateScroll();
  });
};

export const scrollToElemAsync = async (
  elemSelector: string
): Promise<void> => {
  if (elemSelector) {
    const elem = window.document.querySelector(elemSelector);

    await smoothScrollAsync((elem as HTMLElement).offsetTop, 1000);
  }
};

export const smoothScrollTo = (to: number, duration: number) => {
  const element =
    window.document.scrollingElement || window.document.documentElement;

  const start = element.scrollTop;

  const change = to - start;

  const startDate = +new Date();

  const easeInOutQuad = (
    currentTime: number,
    startValue: number,
    changeInValue: number,
    duration: number
  ) => {
    currentTime /= duration / 2;
    if (currentTime < 1)
      return (changeInValue / 2) * currentTime * currentTime + startValue;
    currentTime--;
    return (
      (-changeInValue / 2) * (currentTime * (currentTime - 2) - 1) + startValue
    );
  };

  const animateScroll = () => {
    const currentDate = +new Date();
    const currentTime = currentDate - startDate;
    element.scrollTop = easeInOutQuad(currentTime, start, change, duration);

    if (currentTime < duration) {
      requestAnimationFrame(animateScroll);
    } else {
      element.scrollTop = to;
    }
  };
  animateScroll();
};

const supportsNativeSmoothScroll =
  typeof window === "undefined"
    ? null
    : "scrollBehavior" in window.document.documentElement.style;

export const scrollToElem = (elemSelector: string): void => {
  if (!elemSelector) {
    return;
  }

  const elem = window.document.querySelector(elemSelector);
  if (elem) {
    if (supportsNativeSmoothScroll as any) {
      nativeSmoothScrollTo(elem);
    } else {
      smoothScrollTo((elem as HTMLElement).offsetTop, 600);
    }
  }
};

export default scrollToElem;
