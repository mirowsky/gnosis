import React from "react";
import SupportMenuMain from "../SupportMenu/SupportMenuMain";
import { GTMEvents } from "@workspace/utility";
import { Handshake, LiveHelp, WhatsApp } from "@mui/icons-material";
import { ThemeStyles } from "@workspace/types";
import { useDetectMobile } from "@workspace/hooks";

export type SupportMenuProxyProps = {
  sx?: ThemeStyles;
};

export const SupportMenuProxy = ({ sx }: SupportMenuProxyProps) => {
  const [open, setOpen] = React.useState(false);

  React.useLayoutEffect(() => {
    if (typeof window !== "undefined" && window.innerWidth > 1100) {
      setOpen(true);
    }
  }, []);

  return (
    <SupportMenuMain
      {...{
        sx: sx,
        open: open,
        ContactDialButtonProps: {
          iconClosed: WhatsApp,
          id: "wpp-button",
          "aria-label":
            "Clique para expandir opções de atendimento com o nosso time de suporte",
          onClick: () => {
            if (!open) {
              GTMEvents.supportMenu();
            }
            setOpen((prev) => !prev);
          },
          open: open,
        },
        SupportMenuProps: {
          sx: {
            transform: "scale(0.75)",
            transformOrigin: "bottom right",
            maxWidth: "400px",
          },
          headerTitle: "Precisa de ajuda? Fale conosco!",
          headerSubtitle: "Converse com nossa equipe via WhatsApp",
          onClick: () => setOpen(false),
          items: [
            {
              onClick: () => {
                GTMEvents.supportItem({ supportItemLabel: "Equipe comercial" });
              },
              label:
                "Suporte com nossa equipe comercial - Clique para ser direcionado ao WhatsApp",
              icon: Handshake,
              subtitle: "Fale com o nosso time e consulte valores e condições",
              title: "Equipe comercial",
              online: true,
              id: "suporte-equipe-comercial",
            },
            {
              onClick: () => {
                GTMEvents.supportItem({
                  supportItemLabel: "Central de dúvidas",
                });
              },
              label:
                "Suporte para dúvidas gerais - Clique para ser direcionado ao WhatsApp.",
              icon: LiveHelp,
              id: "suporte-duvidas",
              title: "Tire suas dúvidas",
              subtitle:
                "Ficou com alguma dúvida? Fale com a gente agora mesmo pelo WhatsApp",
              online: false,
            },
          ],
        },
      }}
    />
  );
};
