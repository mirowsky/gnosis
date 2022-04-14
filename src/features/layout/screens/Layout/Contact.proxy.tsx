import { ContactFormInputs, useContactForm } from "@workspace/hooks";
import { ThemeStyles } from "@workspace/types";
import { UseFormReturn } from "react-hook-form";
import ContactSection from "../Contact/ContactSection";
import { ContactEmailSender, ContactFormSubmitter } from "@workspace/services";
import { AlertState, alertStore } from "@workspace/components/shared";
import { GTMEvents } from "@workspace/utility";

export type ContactProxyProps = {
  sx?: ThemeStyles;
};

export const ContactProxy = ({ sx }: ContactProxyProps) => {
  const form = useContactForm();

  const alert = alertStore((state) => state.dispatch);

  return (
    <ContactSection
      {...{
        sx: sx,
        id: "contact_section",
        img: {
          src: "/images/contact-doc.webp",
          alt: "Doutoura jovem, vestindo um jaleco e com um estetoscópio em volta de seu pescoço, apontando para a esquerda com um de seus dedos",
        },
        ContactFormProps: {
          LoadingButtonProps: {
            onClick: () => HANDLER(form, alert),
            loading: form.formState.isSubmitting,
            disabled: !form.formState.isValid,
            children: "Enviar",
          },
          EmailInputProps: {
            ...form.register("email"),
            label: "E-mail",
            placeholder: "Ex: joao.alves@gmail.com",
            error: Boolean(form.formState.errors.email),
            helperText: form.formState.errors.email?.message || " ",
          },
          MessageIputProps: {
            ...form.register("message"),
            label: "Mensagem",
            placeholder: "Ex: Gostaria de saber como funciona o curso de...",
            error: Boolean(form.formState.errors.message),
            helperText: form.formState.errors.message?.message || " ",
          },
          NameInputProps: {
            ...form.register("name"),
            label: "Nome completo",
            placeholder: "Ex: João Alves da Silva",
            error: Boolean(form.formState.errors.name),
            helperText: form.formState.errors.name?.message || " ",
          },
          PhoneInputProps: {
            ...form.register("phone"),
            onValueChange: ({
              floatValue: _floatValue,
              formattedValue,
              value: _value,
            }) => {
              form.setValue("phone", formattedValue);
            },
            label: "Número de telefone",
            placeholder: "Ex: (99) 9-8765-4321",
            error: Boolean(form.formState.errors.phone),
            helperText: form.formState.errors.phone?.message || " ",
          },
        },
        sectionTitle:
          "Solicite sua matrícula ou tire dúvidas sobre nossos cursos.",
      }}
    />
  );
};

type SubmitContactHandler = (
  form: UseFormReturn<ContactFormInputs, any>,
  alert: (alert: Omit<AlertState, "open">) => void
) => Promise<void>;

const submitHandler__prod = async (
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

const HANDLER: SubmitContactHandler =
  process.env.NODE_ENV === "production"
    ? submitHandler__prod
    : submitHandler__dev;
