import React from "react";
import { useRouter } from "next/router";
import { GTMEvents } from "src/utility";

export function useGTMWithNextJSRouter() {
  const router = useRouter();

  React.useEffect(() => {
    router.events.on("routeChangeComplete", GTMEvents.pageView);

    return () => {
      router.events.off("routeChangeComplete", GTMEvents.pageView);
    };
  }, [router.events]);
}
