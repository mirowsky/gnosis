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
import { handleMenuClick } from "@workspace/utility";

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
        onClick: () => {
          handleMenuClick(router, "#contact_section");
        },
      },
    ] as MobileMenuProps["menuItems"];
  }, [router]);

  return {
    SupportMenuMainProps: createSupportMenu({
      items: [],
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