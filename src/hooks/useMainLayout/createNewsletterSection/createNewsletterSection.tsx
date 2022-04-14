import { AlertState, alertStore } from "@workspace/components/shared";
import { NewsLetterSectionProps } from "@workspace/components/shared";
import { UseFormReturn } from "react-hook-form";

const submitHandler__prod = (form: UseFormReturn<{ email: string }, any>) => {};

export const createNewsletterSection = (params: {
  form: UseFormReturn<{ email: string }, any>;
}): NewsLetterSectionProps => {
  const dispatchAlert = alertStore((state) => state.dispatch);

  return {
    img: {
      src: "/images/newsletter-doc.webp",
      alt: "Médica jovem, sorrindo para a câmera, vestindo um jaleco, com os dois braços em frente ao seu corpo",
    },
    sectionTitle: "Assine nossa Newsletter e fique por dentro das novidades.",
    InputWithButtonProps: {
      InputProps: {
        ...params.form.register("email"),
        placeholder: "Digite seu e-mail aqui",
      },
      ButtonProps: {
        loading: params.form.formState.isSubmitting,
        disabled: !params.form.formState.isValid,
        onClick: () => submitHandler__dev(params.form, dispatchAlert),
      },
    },
  };
};
