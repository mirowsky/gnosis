import { smoothScrollTo } from ".";
import { Router as NextRouter } from "next/router";

export const handleLogoClick = async (router: NextRouter) => {
  if (router.asPath === "/") {
    smoothScrollTo(0, 250);
  } else {
    await router.push("/");
  }
};
