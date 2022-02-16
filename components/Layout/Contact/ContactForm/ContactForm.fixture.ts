import type { ContactFormProps } from "./ContactForm";

export const DEFAULT_ContactForm_TESTING_PROPS: ContactFormProps = {
  NameInputProps: {
    label: "Nome completo",
    placeholder: "Ex: João Alves da Silva",
  },
  LoadingButtonProps: {
    children: "Submit form",
  },
  MessageIputProps: {
    label: "Mensagem",
    placeholder: "Ex: Gostaria de saber como funciona o curso de...",
  },
  EmailInputProps: {
    label: "E-mail",
    placeholder: "Ex: joao.alves@gmail.com",
  },
  PhoneInputProps: {
    label: "Número de telefone",

    placeholder: "Ex: (99) 9-8765-4321",
  },
};

export const ContactForm_TEST_ID = {} as const;
