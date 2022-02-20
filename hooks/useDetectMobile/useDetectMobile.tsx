import React from "react";
import { isMobile as isMobileFn } from "@workspace/utility";

export const useDetectMobile = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(isMobileFn()!);
    }
  }, []);

  return isMobile;
};
