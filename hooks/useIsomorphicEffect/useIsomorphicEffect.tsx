import React from "react";

const canUseDOM: boolean = !!(
  typeof window !== "undefined" &&
  typeof window.document !== "undefined" &&
  typeof window.document.createElement !== "undefined"
);

export const useIsomorphicEffect = canUseDOM
  ? React.useLayoutEffect
  : React.useEffect;
