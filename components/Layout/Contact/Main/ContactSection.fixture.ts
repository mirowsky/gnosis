import { DEFAULT_ContactForm_TESTING_PROPS } from "../ContactForm/ContactForm.fixture";
import type { ContactSectionProps } from "./ContactSection";

export const DEFAULT_ContactSection_TESTING_PROPS: ContactSectionProps = {
  sectionTitle: "Solicite sua matrícula ou tire dúvidas sobre nossos cursos",
  ContactFormProps: DEFAULT_ContactForm_TESTING_PROPS,
  img: {
    src: "./images/contact-doc.webp",
    alt: "This is a placeholder, change me",
  },
};

export const ContactSection_TEST_ID = {} as const;
