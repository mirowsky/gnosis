import { AlertState } from "@workspace/components/shared";
import { ContactFormInputs } from "@workspace/hooks";
import { ContactEmailSender, ContactFormSubmitter } from "@workspace/services";
import { UseFormReturn } from "react-hook-form";
import { GTMEvents } from ".";

export type SubmitContactHandler = (
  form: UseFormReturn<ContactFormInputs, any>,
  alert: (alert: Omit<AlertState, "open">) => void
) => Promise<void>;

const submitContactForm = async (
  form: UseFormReturn<ContactFormInputs, any>,
  alert: (alert: Omit<AlertState, "open">) => void
) => {
  alert({ message: "Enviando...", severity: "info" });

  form.handleSubmit(async (data, events) => {
    GTMEvents.contact({
      email: data.email,
      message: data.message,
      name: data.name,
      phone: data.phone,
    });

    try {
      await ContactFormSubmitter.submit(data);

      await ContactEmailSender.send(data);

      alert({
        message: "Contato enviado com sucesso!",
        severity: "success",
      });

      form.reset({ email: "", message: "", name: "", phone: "" });
    } catch (error) {
      alert({
        message: "Ocorreu um erro ao tentar enviar o formulário.",
        severity: "error",
      });
    }
  })();
};
const submitHandler__dev = async (
  form: UseFormReturn<ContactFormInputs, any>,
  alert: (alert: Omit<AlertState, "open">) => void
) => {
  await form.handleSubmit(async (data, events) => {
    await new Promise((resolve, reject) => {
      alert({ message: "Enviando...", severity: "info" });

      GTMEvents.contact({
        email: data.email,
        message: data.message,
        name: data.name,
        phone: data.phone,
      });

      try {
        setTimeout(() => {
          alert({
            message: "Contato enviado com sucesso!",
            severity: "success",
          });
        }, 2500);

        form.reset({ email: "", message: "", name: "", phone: "" });

        resolve(data);
      } catch (error) {
        reject(error);
        alert({
          message: "Ocorreu um erro ao tentar enviar o formulário.",
          severity: "error",
        });
      }
    });
  })();
};

const handler: SubmitContactHandler =
  process.env.NODE_ENV === "production"
    ? submitContactForm
    : submitHandler__dev;

export default handler;
