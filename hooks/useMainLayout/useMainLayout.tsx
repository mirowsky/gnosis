import React from "react";
import {
  MainLayoutProps,
  MobileMenuProps,
} from "@workspace/components/layouts";
import { useRouter } from "next/router";
import { createContactFormDialog } from "./createContactFormDialog/createContactFormDialog";
import { createContactSection } from "./createContactSection/createContactSection";
import { createFooter } from "./createFooter/createFooter";
import { createHeader } from "./createHeader/createHeader";
import { createMobileMenu } from "./createMobileMenu/createMobileMenu";
import { createNewsletterSection } from "./createNewsletterSection/createNewsletterSection";
import { createSupportMenu } from "./createSupportMenu/createSupportMenu";
import { handleMenuClick, scrollToElemAsync } from "@workspace/utility";
import { SupportMenuMainProps } from "components/Layout/SupportMenu/Main/SupportMenuMain";
import { Handshake, Help, LiveHelp } from "@mui/icons-material";

export const useMainLayout = (
  router: ReturnType<typeof useRouter>,
  contactForm: Parameters<typeof createContactFormDialog>[0]["form"],
  newsLetterForm: Parameters<typeof createNewsletterSection>[0]["form"]
): Omit<MainLayoutProps, "children"> => {
  const [formDialog, setFormDialog] = React.useState(false);
  const [mobileMenu, setMobileMenu] = React.useState(false);
  const [supportMenu, setSupportMenu] = React.useState(false);

  const menuItems = React.useMemo(() => {
    return [
      {
        label: "Sobre nós",
        onClick: () => {
          handleMenuClick(router, "#about_us_section");
        },
      },
      {
        label: "Cursos",
        onClick: () => {
          handleMenuClick(router, "#courses_section");
        },
      },
      {
        label: "Contato",
        onClick: async () => {
          await scrollToElemAsync("#contact_section");
        },
      },
    ] as MobileMenuProps["menuItems"];
  }, [router]);

  const supportMenuItems = React.useMemo(() => {
    return [
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
    ] as SupportMenuMainProps["SupportMenuProps"]["items"];
  }, []);

  return {
    SupportMenuMainProps: createSupportMenu({
      items: supportMenuItems ?? [],
      open: supportMenu,
      setOpen: setSupportMenu,
    }),
    NewsLetterSectionProps: createNewsletterSection({ form: newsLetterForm }),

    MobileMenuProps: createMobileMenu({
      items: menuItems ?? [],
      onClose: () => setMobileMenu(false),
      onOpen: () => setMobileMenu(true),
      open: mobileMenu,
    }),

    HeaderProps: createHeader({
      open: mobileMenu,
      setOpen: setMobileMenu,
      items: menuItems ?? [],
      router: router,
    }),

    ContactSectionProps: createContactSection({
      form: contactForm,
    }),

    FooterProps: createFooter(),
    ContactFormDialogProps: createContactFormDialog({
      form: contactForm,
      open: formDialog,
      setOpen: setFormDialog,
    }),
  };
};
