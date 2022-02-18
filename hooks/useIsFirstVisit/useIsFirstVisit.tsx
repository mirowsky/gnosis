import React from "react";

const IS_INITIAL_VISIT = "INITIAL_VISIT" as const;

export const useIsFirstVisit = () => {
  const [isFirstVisit, setIsFirstVisit] = React.useState(true);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage[IS_INITIAL_VISIT]) {
        setIsFirstVisit(false);
      } else {
        setIsFirstVisit(true);
        localStorage.setItem(IS_INITIAL_VISIT, "true");
      }
    }
  }, []);

  return isFirstVisit;
};
