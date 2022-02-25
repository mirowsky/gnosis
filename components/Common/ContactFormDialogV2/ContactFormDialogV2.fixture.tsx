import type { ContactFormDialogV2Props } from "./ContactFormDialogV2";

export const DEFAULT_ContactFormDialogV2_TESTING_PROPS: ContactFormDialogV2Props =
  {
    BackdropProps: {
      open: true,
      sx: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
    },
    EmailInputProps: {
      label: "Email",
      placeholder: "Seu email",
    },
    MessageInputProps: {
      label: "Mensagem",
      placeholder: "Sua mensagem",
    },
    NameInputProps: {
      label: "Nome",
      placeholder: "Seu nome",
    },
    PhoneInputProps: {
      label: "Telefone",
      placeholder: "Seu telefone",
    },
    PrimaryActionProps: {
      children: "Enviar",
    },
    SecondaryActionProps: {
      children: "Cancelar",
    },
    subtitle:
      "Preencha o formulário e em breve um de nossos representantes entrará em contato para atendê-lo!",
    title: "Manifestação de interesse",
  };

export const ContactFormDialogV2_TEST_ID = {} as const;
