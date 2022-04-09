import { ContactFormDialogV2Props } from "@workspace/components/common";
import { ContactFormInputs } from "hooks/useContactForm/useContactForm";
import { UseFormReturn } from "react-hook-form";

export const createContactFormDialog = (params: {
  form: UseFormReturn<ContactFormInputs, any>;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  open: boolean;
}): ContactFormDialogV2Props => {
  return {
    PrimaryActionProps: {
      children: "Enviar",
      loading: params.form.formState.isSubmitting,
      disabled: !params.form.formState.isValid,
    },
    SecondaryActionProps: {
      children: "Voltar",
      onClick: () => params.setOpen(false),
    },
    title: "Contato",
    subtitle:
      "Preencha o formulário com seus dados e uma mensagem e um de nossos representantes irá atendê-lo na primeira oportunidade.",
    EmailInputProps: {
      label: "E-mail",
      placeholder: "Ex: joao.alves@gmail.com",
      ...params.form.register("email"),
    },
    MessageInputProps: {
      label: "Mensagem",
      placeholder: "Ex: Gostaria de saber como funciona o curso de...",
      ...params.form.register("message"),
    },
    NameInputProps: {
      label: "Nome completo",
      placeholder: "Ex: João Alves da Silva",
      ...params.form.register("name"),
    },
    PhoneInputProps: {
      onValueChange: (values) => {
        params.form.setValue("phone", values.formattedValue);
      },
      label: "Número de telefone",
      placeholder: "Ex: (99) 9-8765-4321",
      ...params.form.register("phone"),
    },
    BackdropProps: {
      open: params.open,
      onClickAway: () => {
        if (params.open) {
          params.setOpen(false);
        }
      },
    },
  };
};
