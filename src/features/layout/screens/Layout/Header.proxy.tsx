import { handleLogoClick, scrollToElem } from "@workspace/utility";
import { useRouter } from "next/router";
import React from "react";
import Header, { HeaderItem } from "../Header/Header";

export type HeaderProxyProps = {
  items: HeaderItem[];
};

export const HeaderProxy = ({ items = [] }: HeaderProxyProps) => {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  return (
    <Header
      {...{
        burguerOpen: open,
        logo: {
          src: "/images/logo.svg",
          alt: "Instituto Educacional Gnosis - Logotipo - A figura de uma coruja formado por polígonos",
        },
        cta: {
          label: "Contate-nos",
          onClick: () => scrollToElem("#contact_section"),
        },
        onBurguerButtonClick: () => setOpen(true),
        onLogoClick: () => handleLogoClick(router),
        items: items,
      }}
    />
  );
};
