import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const useNewsletterInput = () => {
  const form = useForm<{ email: string }>({
    mode: "onChange",
    resolver: yupResolver(
      Yup.object({
        email: Yup.string()
          .email("É preciso ser um email válido")
          .required("Este campo é obrigatório"),
      }).required()
    ),
  });

  return form;
};
