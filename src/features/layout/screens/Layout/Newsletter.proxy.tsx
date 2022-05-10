import { alertStore } from "@workspace/components/shared";
import { useNewsletterInput } from "@workspace/hooks";
import { NewsLetterSection } from "../Newsletter/NewsLetterSection";
import { newsletterFormHandler } from "@workspace/utility";
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
            disabled: !form.formState.isValid,
            onClick: () => newsletterFormHandler(form, dispatchAlert),
          },
        },
      }}
    />
  );
};
