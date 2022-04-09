import React from "react";
import type { SupportMenuItemProps } from "../../../components/Layout/SupportMenu/SupportMenuItem/SupportMenuItem";
import type { SupportMenuMainProps } from "../../../components/Layout/SupportMenu/Main/SupportMenuMain";

export const createSupportMenu = (params: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  items: SupportMenuItemProps[];
}): SupportMenuMainProps => {
  return {
    open: params.open,
    ContactDialButtonProps: {
      "aria-label":
        "Clique para expandir opções de atendimento com o nosso time de suporte",
      onClick: () => params.setOpen((prev) => !prev),
      open: params.open,
    },
    SupportMenuProps: {
      sx: {
        scale: "0.75",
        transformOrigin: "bottom right",
        maxWidth: "400px",
      },
      headerTitle: "Precisa de ajuda? Fale conosco!",
      headerSubtitle: "Converse com nossa equipe via WhatsApp",
      onClick: () => params.setOpen(false),
      items: params.items,
    },
  };
};
