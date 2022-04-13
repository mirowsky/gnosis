import React from "react";
import {
  MainLayoutProps,
  MobileMenuProps,
} from "@workspace/components/layouts";
import { NextRouter, useRouter } from "next/router";
import { createContactFormDialog } from "./createContactFormDialog/createContactFormDialog";
import { createContactSection } from "./createContactSection/createContactSection";
import { createFooter } from "./createFooter/createFooter";
import { createHeader } from "./createHeader/createHeader";
import { createMobileMenu } from "./createMobileMenu/createMobileMenu";
import { createNewsletterSection } from "./createNewsletterSection/createNewsletterSection";
import { createSupportMenu } from "./createSupportMenu/createSupportMenu";
import { handleMenuClick, scrollToElemAsync } from "@workspace/utility";
import { useWhatsAppRedirect, usePromiseWithNotification } from "@workspace/hooks";
import { alertStore } from "@workspace/components/utility";
import { ContactFormInputs } from "hooks/useContactForm/useContactForm";
import { UseFormReturn } from "react-hook-form";


type WhatsAppDispatcher = ReturnType<typeof useWhatsAppRedirect>
type NotificationStore = ReturnType<typeof alertStore>

export type MainLayoutContext = {
  router: NextRouter,
  whatsapp: WhatsAppDispatcher,
  globalStore: {
    notification: NotificationStore
  },
  forms: {
    contact: UseFormReturn<ContactFormInputs, any>,
    newsletter: UseFormReturn<{email: string}, any>
  }
}

export const useMainLayout = (
 context: MainLayoutContext
  
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
          handleMenuClick(router, "#course_section");
        },
      },
      {
        label: "Contato",
        onClick: async () => {
          await scrollToElemAsync("#contact_section");
        },
      },
    ] as MobileMenuProps["menuItems"];
  }, [context.router]);

  return {
    SupportMenuMainProps: createSupportMenu({
      open: supportMenu,
      setOpen: setSupportMenu,
      whatsAppHandler: context.whatsapp,
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
      submitHandler: 
    }),
  };
};
