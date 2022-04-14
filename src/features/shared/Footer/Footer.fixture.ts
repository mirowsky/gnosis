import { FooterProps } from "./Footer";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import { noop } from "src/utility";

export const FOOTER_TEST_ID = {
  CONTACTS_CONTAINER: "footer-contact-container-test-id",
  EMAIL_CONTACT_CONTAINER: "footer-email-contact-container-test-id",
  SOCIALS_CONTAINER: "footer-socials-test-id",
} as const;

export const DEFAULT_Footer_TESTING_PROPS: FooterProps = {
  FooterContactInfoProps: {
    address: "Avenida Praia de Belas, 1212, sala 424, RS - Brasil",
    emails: ["atendimento@institutoeg.com"],
    phones: ["(51) 9-9143-1009"],
    registration: "CNPJ: 36.605.433/0001-18",
  },
  FooterIconsProps: {
    facebook: "https://www.facebook.com/InstitutoGnosisEducacional/",
    instagram: "https://www.instagram.com/gnosisinstitutoeducacional/",
    whatsApp: "https://wa.link/3in1jl",
    twitter: "https://twitter.com/GnosisInstituto",
    linkedin:
      "https://www.youtube.com/channel/UC4qx3U-Hk8qlX46zTZqrL0w/videos?view_as=subscriber",
    youtube:
      "https://www.youtube.com/channel/UC4qx3U-Hk8qlX46zTZqrL0w/videos?view_as=subscriber",
  },
};
