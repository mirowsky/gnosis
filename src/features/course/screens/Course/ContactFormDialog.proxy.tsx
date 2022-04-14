import React from "react";
import { useContactForm } from "@workspace/hooks";
import { alertStore, ContactFormDialog } from "@workspace/components/shared";
import { CourseCollectionType, ThemeStyles } from "@workspace/types";
import { courseFormHandler } from "@workspace/utility";

export type ContactFormDialogProxyProps = {
  course: CourseCollectionType;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  sx?: ThemeStyles;
};

export const ContactFormDialogProxy = ({
  course,
  sx,
  open = false,
  setOpen = () => {},
}: ContactFormDialogProxyProps) => {
  const dialogForm = useContactForm();
  const alert = alertStore((state) => state.dispatch);

  return (
    <ContactFormDialog
      {...{
        sx: sx,
        title: `Manifestação de interesse - Curso de ${course.courseLevel.toLowerCase()} - ${
          course.courseArea
        } - ${course.courseName}`,
        subtitle:
          "Preencha o formulário e em breve um de nossos representantes entrará em contato para atendê-lo!",
        open: open,
        handleClose: () => setOpen(false),
        PrimaryButtonProps: {
          onClick: async () => {
            await courseFormHandler(dialogForm, alert, course);

            setOpen(false);
          },
          children: "Enviar",
          disabled: !dialogForm.formState.isValid,
        },
        SecondaryButtonProps: {
          children: "Cancelar",
          disabled: dialogForm.formState.isSubmitting,
          onClick: () => setOpen(false),
        },
        emailInputProps: {
          ...dialogForm.register("email"),
          error: Boolean(dialogForm.formState.errors.email),
          helperText: dialogForm.formState.errors.email?.message ?? "",
          label: "Email",
          placeholder: "E.g: joao.alves@gmail.com",
        },
        nameInputProps: {
          ...dialogForm.register("name"),
          error: Boolean(dialogForm.formState.errors.name),
          helperText: dialogForm.formState.errors.name?.message ?? "",
          label: "Nome completo",
          placeholder: "E.g: João Alves",
        },
        messageInputProps: {
          ...dialogForm.register("message"),
          error: Boolean(dialogForm.formState.errors.message),
          helperText: dialogForm.formState.errors.message?.message ?? "",
          label: "Mensagem",
          placeholder: "E.g; Gostaria de mais informações sobre...",
        },
        phoneInputProps: {
          ...dialogForm.register("phone"),
          error: Boolean(dialogForm.formState.errors.phone),
          helperText: dialogForm.formState.errors.phone?.message ?? "",
          label: "Número de telefone",
          placeholder: "E.g; 51998877334",

          onValueChange: (values) => {
            dialogForm.setValue("phone", values.formattedValue);
          },
        },
      }}
    />
  );
};
