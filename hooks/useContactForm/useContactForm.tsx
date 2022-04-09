import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

export type ContactFormInputs = {
  name: string;
  message: string;
  email: string;
  phone: string;
};

export const contactFormSchema: Yup.SchemaOf<ContactFormInputs> = Yup.object({
  email: Yup.string()
    .email("Precisa ser um email válido")
    .required("Este campo é obrigatório"),
  message: Yup.string().required("Este campo é obrigatório"),
  phone: Yup.string().required("Este campo é obrigatório"),
  name: Yup.string().required("Este campo é obrigatório"),
}).required();

export const useContactForm = () => {
  const form = useForm<ContactFormInputs>({
    mode: "onBlur",
    resolver: yupResolver(contactFormSchema),
  });

  return form;
};
