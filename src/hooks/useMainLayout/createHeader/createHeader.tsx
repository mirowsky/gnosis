import React from "react";
import { HeaderProps } from "@workspace/components/shared";
import { handleLogoClick, scrollToElem } from "src/utility";
import { useRouter } from "next/router";

export const createHeader = (params: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  items: HeaderProps["items"];
  router: ReturnType<typeof useRouter>;
}): HeaderProps => {
  return {
    burguerOpen: params.open,
    logo: {
      src: "/images/logo.svg",
      alt: "Instituto Educacional Gnosis - Logotipo - A figura de uma coruja formado por polígonos",
    },
    cta: {
      label: "Contate-nos",
      onClick: () => scrollToElem("#contact_section"),
    },
    onBurguerButtonClick: () => params.setOpen(true),
    onLogoClick: () => handleLogoClick(params.router),
    items: params.items,
  };
};
