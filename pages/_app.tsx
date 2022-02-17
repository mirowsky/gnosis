import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "@emotion/cache";
import React from "react";
import CustomTheme from "theme/CustomTheme";
import "../styles/global.styles.css";
import { MainLayout, MainLayoutProps } from "@workspace/components/layouts";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Money, OnlinePredictionTwoTone, School } from "@mui/icons-material";
import { scrollToElem, smoothScrollTo } from "@workspace/utility";

type ContactFormInputs = {
  name: string;
  message: string;
  email: string;
  phone: string;
};

const contactFormSchema: Yup.SchemaOf<ContactFormInputs> = Yup.object({
  email: Yup.string()
    .email("Precisa ser um email válido")
    .required("Este campo é obrigatório"),
  message: Yup.string().required("Este campo é obrigatório"),
  phone: Yup.string().required("Este campo é obrigatório"),
  name: Yup.string().required("Este campo é obrigatório"),
}).required();

function MyApp(props: AppProps & { emotionCache?: EmotionCache }) {
  const clientSideCache = createEmotionCache({ key: "css" });

  const {
    Component,
    pageProps,
    emotionCache = clientSideCache,
    router,
  } = props;

  const [contactFormDialogOpen, setContactFormDialogOpen] =
    React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [contactDialOpen, setContactDialOpen] = React.useState(false);

  const contactForm = useForm<ContactFormInputs>({
    mode: "onBlur",
    resolver: yupResolver(contactFormSchema),
  });
  const dialogForm = useForm<ContactFormInputs>({
    mode: "onBlur",
    resolver: yupResolver(contactFormSchema),
  });
  const newsletterInput = useForm<{ email: string }>({
    mode: "onChange",
    resolver: yupResolver(
      Yup.object({
        email: Yup.string()
          .email("É preciso ser um email válido")
          .required("Este campo é obrigatório"),
      }).required()
    ),
  });

  return (
    <React.Fragment>
      <CacheProvider value={emotionCache}>
        <CustomTheme>
          <MainLayout
            HeaderProps={{
              ...HEADER_PROPS,
              cta: {
                ...HEADER_PROPS.cta,
                onClick: () => setContactFormDialogOpen(true),
              },
              burguerOpen: mobileMenuOpen,
              onBurguerButtonClick: () => setMobileMenuOpen(true),
            }}
            FooterProps={FOOTER_PROPS}
            MobileMenuProps={{
              ...MOBILE_MENU_PROPS,
              open: mobileMenuOpen,
              onOpen: () => setMobileMenuOpen(true),
              onClose: () => setMobileMenuOpen(false),
            }}
            ContactSectionProps={{
              ...CONTACT_SECTION_PROPS,
              ContactFormProps: {
                LoadingButtonProps: {
                  loading: contactForm.formState.isSubmitting,
                  disabled: !contactForm.formState.isValid,
                  children: "Enviar",
                },
                EmailInputProps: {
                  ...contactForm.register("email"),
                  label: "E-mail",
                  placeholder: "Ex: joao.alves@gmail.com",
                  error: Boolean(contactForm.formState.errors.email),
                  helperText:
                    contactForm.formState.errors.email?.message || " ",
                },
                MessageIputProps: {
                  ...contactForm.register("message"),
                  label: "Mensagem",
                  placeholder:
                    "Ex: Gostaria de saber como funciona o curso de...",
                  error: Boolean(contactForm.formState.errors.message),
                  helperText:
                    contactForm.formState.errors.message?.message || " ",
                },
                NameInputProps: {
                  ...contactForm.register("name"),
                  label: "Nome completo",
                  placeholder: "Ex: João Alves da Silva",
                  error: Boolean(contactForm.formState.errors.name),
                  helperText: contactForm.formState.errors.name?.message || " ",
                },
                PhoneInputProps: {
                  ...contactForm.register("phone"),
                  onValueChange: ({
                    floatValue: _floatValue,
                    formattedValue,
                    value: _value,
                  }) => {
                    contactForm.setValue("phone", formattedValue);
                  },
                  label: "Número de telefone",
                  placeholder: "Ex: (99) 9-8765-4321",
                  error: Boolean(contactForm.formState.errors.phone),
                  helperText:
                    contactForm.formState.errors.phone?.message || " ",
                },
              },
            }}
            NewsLetterSectionProps={{
              ...NEWSLETTER_SECTION_PROPS,
              InputWithButtonProps: {
                InputProps: {
                  ...newsletterInput.register("email"),
                  placeholder: "Digite seu e-mail aqui",
                },
                ButtonProps: {
                  loading: newsletterInput.formState.isSubmitting,
                  disabled: !newsletterInput.formState.isValid,
                },
              },
            }}
            ContactDialProps={{
              ...CONTACT_DIAL_PROPS,
              ContactDialButtonProps: {
                open: contactDialOpen,
                onClick: () => setContactDialOpen((prevState) => !prevState),
              },
            }}
            ContactFormDialogProps={{
              ...CONTACT_FORM_DIALOG_PROPS,
              open: contactFormDialogOpen,
              handleClose: () => setContactFormDialogOpen(false),
              emailInputProps: {
                label: "E-mail",
                placeholder: "Ex: joao.alves@gmail.com",
                ...dialogForm.register("email"),
              },
              messageInputProps: {
                label: "Mensagem",
                placeholder:
                  "Ex: Gostaria de saber como funciona o curso de...",
                ...dialogForm.register("message"),
              },
              nameInputProps: {
                label: "Nome completo",
                placeholder: "Ex: João Alves da Silva",
                ...dialogForm.register("name"),
              },
              phoneInputProps: {
                onValueChange: (values) => {
                  dialogForm.setValue("phone", values.formattedValue);
                },
                label: "Número de telefone",
                placeholder: "Ex: (99) 9-8765-4321",
                ...dialogForm.register("phone"),
              },
            }}
          >
            <div
              aria-hidden="true"
              style={{ visibility: "hidden", display: "none" }}
              id="top"
            ></div>
            <Component {...pageProps} />
          </MainLayout>
        </CustomTheme>
      </CacheProvider>
    </React.Fragment>
  );
}

export default MyApp;

const CONTACT_FORM_DIALOG_PROPS: MainLayoutProps["ContactFormDialogProps"] = {
  cancelLabel: "Cancelar",
  title: "Contato",
  subtitle:
    "Preencha o formulário com seus dados e uma mensagem e um de nossos representantes irá atendê-lo na primeira oportunidade.",
  submitLabel: "Enviar",
};

const CONTACT_DIAL_PROPS: MainLayoutProps["ContactDialProps"] = {
  ContactDialButtonProps: {
    color: "primary",
    open: false,
  },
  items: [
    { action: () => {}, icon: Money, label: "Valores" },
    { action: () => {}, icon: School, label: "Validação de diploma" },
    {
      action: () => {},
      icon: OnlinePredictionTwoTone,
      label: "Sistema de aprendizado virtual",
    },
  ],
};

const NEWSLETTER_SECTION_PROPS: MainLayoutProps["NewsLetterSectionProps"] = {
  img: {
    src: "images/newsletter-doc.webp",
    alt: "Médica jovem, sorrindo para a câmera, vestindo um jaleco, com os dois braços em frente ao seu corpo",
  },
  sectionTitle: "Assine nossa Newsletter e fique por dentro das novidades.",
  InputWithButtonProps: {},
};

const CONTACT_SECTION_PROPS: MainLayoutProps["ContactSectionProps"] = {
  id: "contact_section",
  img: {
    src: "images/contact-doc.webp",
    alt: "Doutoura jovem, vestindo um jaleco e com um estetoscópio em volta de seu pescoço, apontando para a esquerda com um de seus dedos",
  },
  ContactFormProps: {},
  sectionTitle: "Solicite sua matrícula ou tire dúvidas sobre nossos cursos.",
};

const FOOTER_PROPS: MainLayoutProps["FooterProps"] = {
  FooterContactInfoProps: {
    address: "Avenida Praia de Belas, 1212, sala 424, RS - Brasil",
    emails: ["atendimento@institutoeg.com"],
    phones: ["(51) 9-9143-1009"],
    registration: "CNPJ: 36.605.433/0001-18",
  },
  FooterIconsProps: {
    facebook: "https://www.facebook.com/InstitutoGnosisEducacional/",
    instagram: "https://www.instagram.com/gnosisinstitutoeducacional/",
    whatsApp: "https://wa.link/3in1jl",
    twitter: "https://twitter.com/GnosisInstituto",
    linkedin:
      "https://www.youtube.com/channel/UC4qx3U-Hk8qlX46zTZqrL0w/videos?view_as=subscriber",
    youtube:
      "https://www.youtube.com/channel/UC4qx3U-Hk8qlX46zTZqrL0w/videos?view_as=subscriber",
  },
};

const HEADER_PROPS: MainLayoutProps["HeaderProps"] = {
  onLogoClick: () => smoothScrollTo(0, 1000),
  cta: {
    label: "Contate-nos",
    onClick: () => {},
  },
  burguerOpen: false,
  items: [
    { label: "Sobre nós", onClick: () => scrollToElem("#about_us_section") },
    { label: "Cursos", onClick: () => scrollToElem("#course_section") },
  ],
  logo: {
    src: "https://via.placeholder.com/500",
    alt: "Instituto Educacional Gnosis - Logotipo - A figura de uma coruja formado por polígonos",
    label: "Instituto Gnosis",
  },
};

const MOBILE_MENU_PROPS: MainLayoutProps["MobileMenuProps"] = {
  menuItems: HEADER_PROPS.items,
  onClose: () => {},
  onOpen: () => {},
  logo: HEADER_PROPS.logo,
  open: false,
};
