import type { ContactFormDialogProps } from "./ContactFormDialog";

export const DEFAULT_ContactFormDialog_TESTING_PROPS: ContactFormDialogProps = {
  title: "Placeholder title",
  subtitle:
    "Lorem ipsum dolum salet, please fill out this fields this is placeholder text to give context about this forms purpose to the end user.",
  cancelLabel: "Cancel",
  submitLabel: "Send",
  handleClose: () => {},
  open: true,
  emailInputProps: {
    label: "Email",
    placeholder: "Ex. joao.vitor@gmail.com",
  },
  messageInputProps: {
    label: "Mensagem",
    placeholder: "Ex: Tenho dúvidas a respeito de...",
  },
  nameInputProps: {
    label: "Nome completo",
    placeholder: "Ex. João Vitor",
  },
  phoneInputProps: {
    label: "Número",
    placeholder: "Ex: (00) 0-0000-0000",
  },
};

export const ContactFormDialog_TEST_ID = {} as const;
