import React from "react";
import type { SupportMenuItemProps } from "../../../components/Layout/SupportMenu/SupportMenuItem/SupportMenuItem";
import type { SupportMenuMainProps } from "../../../components/Layout/SupportMenu/Main/SupportMenuMain";

export const createSupportMenu = (
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>,
  items: SupportMenuItemProps[]
): SupportMenuMainProps => {
  return {
    open: open,
    ContactDialButtonProps: {
      "aria-label":
        "Clique para expandir opções de atendimento com o nosso time de suporte",
      onClick: () => setOpen((prev) => !prev),
      open: open,
    },
    SupportMenuProps: {
      headerTitle: "Precisa de ajuda? Fale conosco!",
      headerSubtitle: "Converse com nossa equipe via WhatsApp",
      onClick: () => setOpen(false),
      items: items,
    },
  };
};
