import { AlertState } from "@workspace/components/shared";
import { NewsletterSubmitter } from "@workspace/services";
import { UseFormReturn } from "react-hook-form";
import { events as GTMEvents } from "./gtag";

export type SubmitNewsletterHandler = (
  form: UseFormReturn<{ email: string }>,
  alert: (alert: Omit<AlertState, "open">) => void
) => Promise<void>;

const submitNewsletterForm: SubmitNewsletterHandler = async (form, alert) => {
  alert({ message: "Enviando...", severity: "info" });

  form.handleSubmit(async (data, events) => {
    GTMEvents.newsletter(data.email);

    try {
      await NewsletterSubmitter.submit({ email: data.email });

      alert({
        message: "Você inscreveu-se em nossa newsletter com sucesso!",
        severity: "success",
      });

      form.reset({ email: "" });
    } catch (error) {
      alert({
        message: "Ocorreu um erro ao tentar enviar sua inscrição.",
        severity: "error",
      });
    }
  })();
};

const submitNewsletterForm__dev: SubmitNewsletterHandler = async (
  form,
  alert
) => {
  alert({ message: "Enviando...", severity: "info" });

  form.handleSubmit(async (data, events) => {
    try {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(data.email);
        }, 2500);
      });

      alert({
        message: "Voce inscreveu-se em nossa newsletter com sucesso!",
        severity: "success",
      });

      form.reset({ email: "" });
    } catch (error) {}
  })();
};

const handler: SubmitNewsletterHandler =
  process.env.NODE_ENV === "production"
    ? submitNewsletterForm
    : submitNewsletterForm__dev;

export default handler;
