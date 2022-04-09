import React from "react";
import { HeaderProps } from "@workspace/components/layouts";

export const createHeader = (params: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  items: HeaderProps["items"];
}): HeaderProps => {
  return {
    burguerOpen: params.open,
    logo: {
      src: "/images/logo.svg",
      alt: "Instituto Educacional Gnosis - Logotipo - A figura de uma coruja formado por polígonos",
    },
    cta: {
      label: "Contate-nos",
      onClick: () => params.setOpen(true),
    },
    onBurguerButtonClick: () => {},
    onLogoClick: () => {},
    items: params.items,
  };
};
