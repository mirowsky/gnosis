import { FooterProps } from "./Footer";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import { noop } from "@workspace/utility";

export const FOOTER_TEST_ID = {
  CONTACTS_CONTAINER: "footer-contact-container-test-id",
  EMAIL_CONTACT_CONTAINER: "footer-email-contact-container-test-id",
  SOCIALS_CONTAINER: "footer-socials-test-id",
} as const;

export const DEFAULT_FOOTER_TEST_PROPS: FooterProps = {
  contacts: ["(51)9-88774433", "(11)9-6342-4444"],
  copyright:
    "©2021 - Todos Direitos Reservados Atlas Code - Desenvolvimento web & estratégia",
  emailContacts: ["email@contact.com"],
  socials: [
    {
      icon: Facebook,
      onClick: noop,
    },
    {
      icon: WhatsApp,
      onClick: noop,
    },
    {
      icon: Instagram,
      onClick: noop,
    },
  ],
};
