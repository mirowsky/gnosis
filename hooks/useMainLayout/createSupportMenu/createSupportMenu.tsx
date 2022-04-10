import React from "react";
import type { SupportMenuMainProps } from "../../../components/Layout/SupportMenu/Main/SupportMenuMain";
import { Handshake, LiveHelp, WhatsApp } from "@mui/icons-material";
import { useWhatsAppRedirect } from "@workspace/hooks";
import { events } from "../../../utility/gtag";

export const createSupportMenu = (params: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  whatsAppHandler: ReturnType<typeof useWhatsAppRedirect>;
}): SupportMenuMainProps => {
  return {
    open: params.open,
    ContactDialButtonProps: {
      iconClosed: WhatsApp,
      id: "wpp-button",
      "aria-label":
        "Clique para expandir opções de atendimento com o nosso time de suporte",
      onClick: () => {
        if (!params.open) {
          events.supportMenu();
        }
        params.setOpen((prev) => !prev);
      },
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
      items: [
        {
          label:
            "Suporte com nossa equipe comercial - Clique para ser direcionado ao WhatsApp",
          icon: Handshake,
          subtitle: "Fale com nossa equipe comercial",
          title: "Equipe comercial",
          online: true,
          id: "suporte-equipe-comercial",
        },
        {
          label:
            "Suporte para dúvidas gerais - Clique para ser direcionado ao WhatsApp.",
          icon: LiveHelp,
          id: "suporte-duvidas",
          title: "Tire suas dúvidas",
          subtitle: "Está em dúvida sobre qual curso escolher? Fale conosco?",
          online: false,
        },
      ],
    },
  };
};
