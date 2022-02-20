import React from "react";
import { isMobile as isMobileFn } from "@workspace/utility";

export const useDetectMobile = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const callback = () => setIsMobile(isMobileFn()!);

      window.addEventListener("resize", callback);
      callback();

      return () => {
        window.removeEventListener("resize", callback);
      };
    }
  }, []);

  return isMobile;
};
