import { ContactSectionProps } from "@workspace/components/layouts";
import { UseFormReturn } from "react-hook-form";
import { ContactFormInputs } from "@workspace/hooks";

const submitHandler__dev = async (
  form: UseFormReturn<ContactFormInputs, any>
) => {
  await form.handleSubmit(async (data, events) => {
    await new Promise((resolve, reject) => {
      resolve(data);
    }).then((data) => {
      console.log(data);
    });
  })();
};

const submitHandler__prod = async () => {};

export const createContactSection = (params: {
  form: UseFormReturn<ContactFormInputs, any>;
}): ContactSectionProps => {
  return {
    id: "contact_section",
    img: {
      src: "/images/contact-doc.webp",
      alt: "Doutoura jovem, vestindo um jaleco e com um estetoscópio em volta de seu pescoço, apontando para a esquerda com um de seus dedos",
    },
    ContactFormProps: {
      LoadingButtonProps: {
        onClick: () => submitHandler__dev(params.form),
        loading: params.form.formState.isSubmitting,
        disabled: !params.form.formState.isValid,
        children: "Enviar",
      },
      EmailInputProps: {
        ...params.form.register("email"),
        label: "E-mail",
        placeholder: "Ex: joao.alves@gmail.com",
        error: Boolean(params.form.formState.errors.email),
        helperText: params.form.formState.errors.email?.message || " ",
      },
      MessageIputProps: {
        ...params.form.register("message"),
        label: "Mensagem",
        placeholder: "Ex: Gostaria de saber como funciona o curso de...",
        error: Boolean(params.form.formState.errors.message),
        helperText: params.form.formState.errors.message?.message || " ",
      },
      NameInputProps: {
        ...params.form.register("name"),
        label: "Nome completo",
        placeholder: "Ex: João Alves da Silva",
        error: Boolean(params.form.formState.errors.name),
        helperText: params.form.formState.errors.name?.message || " ",
      },
      PhoneInputProps: {
        ...params.form.register("phone"),
        onValueChange: ({
          floatValue: _floatValue,
          formattedValue,
          value: _value,
        }) => {
          params.form.setValue("phone", formattedValue);
        },
        label: "Número de telefone",
        placeholder: "Ex: (99) 9-8765-4321",
        error: Boolean(params.form.formState.errors.phone),
        helperText: params.form.formState.errors.phone?.message || " ",
      },
    },
    sectionTitle: "Solicite sua matrícula ou tire dúvidas sobre nossos cursos.",
  };
};