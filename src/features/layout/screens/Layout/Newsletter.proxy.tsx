import { AlertState, alertStore } from "@workspace/components/shared";
import { useNewsletterInput } from "@workspace/hooks";
import { UseFormReturn } from "react-hook-form";
import { NewsLetterSection } from "../Newsletter/NewsLetterSection";

export type NewsletterProxyProps = {};

export const NewsletterProxy = (props: NewsletterProxyProps) => {
  const dispatchAlert = alertStore((state) => state.dispatch);
  const form = useNewsletterInput();

  return (
    <NewsLetterSection
      {...{
        img: {
          src: "/images/newsletter-doc.webp",
          alt: "Médica jovem, sorrindo para a câmera, vestindo um jaleco, com os dois braços em frente ao seu corpo",
        },
        sectionTitle:
          "Assine nossa Newsletter e fique por dentro das novidades.",
        InputWithButtonProps: {
          InputProps: {
            ...form.register("email"),
            placeholder: "Digite seu e-mail aqui",
          },
          ButtonProps: {
            loading: form.formState.isSubmitting,
            disabled: form.formState.isValid,
            onClick: () => submitHandler__dev(form, dispatchAlert),
          },
        },
      }}
    />
  );
};

const submitHandler__dev = (
  form: UseFormReturn<{ email: string }, any>,
  dispatch: (alert: Omit<AlertState, "open">) => void
) => {
  form.handleSubmit(
    async (data, event) => {
      await new Promise((resolve, reject) => {
        dispatch({
          message: "Enviando sua inscrição...",
          severity: "info",
        });

        setTimeout(() => {
          resolve(data);
        }, 1500);
      })

        .then(() => {
          form.reset({ email: "" });

          dispatch({
            message: `Obrigado por inscrever-se em nossa newsletter.`,
            severity: "success",
          });
        })
        .catch((err) => {});
    },
    (error, errorEvents) => {}
  )();
};
