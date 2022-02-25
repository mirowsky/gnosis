import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "@emotion/cache";
import React from "react";
import CustomTheme from "../theme/CustomTheme";
import { MainLayout, MainLayoutProps } from "@workspace/components/layouts";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Money, OnlinePredictionTwoTone, School } from "@mui/icons-material";
import { handleLogoClick, handleMenuClick } from "@workspace/utility";
import { alertStore, GlobalSnack } from "@workspace/components/utility";
import Head from "next/head";

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

  const contactDialProps: MainLayoutProps["ContactDialProps"] =
    React.useMemo(() => {
      return {
        ContactDialButtonProps: {
          open: contactDialOpen,
          onClick: () => setContactDialOpen((prevState) => !prevState),
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
    }, [contactDialOpen]);

  const headerProps: MainLayoutProps["HeaderProps"] = React.useMemo(() => {
    return {
      logo: {
        src: "/images/logo.svg",
        alt: "Instituto Educacional Gnosis - Logotipo - A figura de uma coruja formado por polígonos",
        label: "Instituto Gnosis",
      },
      items: [
        {
          label: "Sobre nós",
          onClick: () => handleMenuClick(router, "#about_us_section"),
        },
        {
          label: "Cursos",
          onClick: () => handleMenuClick(router, "#course_section"),
        },
      ],
      onLogoClick: () => handleLogoClick(router),
      cta: {
        label: "Contate-nos",
        onClick: () => setContactFormDialogOpen(true),
      },
      burguerOpen: mobileMenuOpen,
      onBurguerButtonClick: () => setMobileMenuOpen(true),
    };
  }, [mobileMenuOpen, router]);

  const footerProps: MainLayoutProps["FooterProps"] = React.useMemo(() => {
    return {
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
  }, []);

  const contactSectionProps: MainLayoutProps["ContactSectionProps"] = {
    id: "contact_section",
    img: {
      src: "/images/contact-doc.webp",
      alt: "Doutoura jovem, vestindo um jaleco e com um estetoscópio em volta de seu pescoço, apontando para a esquerda com um de seus dedos",
    },
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
        helperText: contactForm.formState.errors.email?.message || " ",
      },
      MessageIputProps: {
        ...contactForm.register("message"),
        label: "Mensagem",
        placeholder: "Ex: Gostaria de saber como funciona o curso de...",
        error: Boolean(contactForm.formState.errors.message),
        helperText: contactForm.formState.errors.message?.message || " ",
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
        helperText: contactForm.formState.errors.phone?.message || " ",
      },
    },
    sectionTitle: "Solicite sua matrícula ou tire dúvidas sobre nossos cursos.",
  };

  const dispatchAlert = alertStore((state) => state.dispatch);

  const newsLetterSectionProps: MainLayoutProps["NewsLetterSectionProps"] = {
    img: {
      src: "/images/newsletter-doc.webp",
      alt: "Médica jovem, sorrindo para a câmera, vestindo um jaleco, com os dois braços em frente ao seu corpo",
    },
    sectionTitle: "Assine nossa Newsletter e fique por dentro das novidades.",
    InputWithButtonProps: {
      InputProps: {
        ...newsletterInput.register("email"),
        placeholder: "Digite seu e-mail aqui",
      },
      ButtonProps: {
        loading: newsletterInput.formState.isSubmitting,
        disabled: !newsletterInput.formState.isValid,
        onClick: newsletterInput.handleSubmit(async (data) => {
          await new Promise((resolve, reject) => {
            dispatchAlert({ message: "Working...", severity: "info" });

            setTimeout(() => {
              resolve("ok");
            }, 5000);
          }).then((val) => {
            dispatchAlert({
              message: newsletterInput.getValues("email"),
              severity: "success",
            });
            newsletterInput.reset({ email: "" });
          });
        }),
      },
    },
  };
  const contactFormDialogProps: MainLayoutProps["ContactFormDialogProps"] = {
    PrimaryActionProps: {
      children: "Enviar",
      loading: dialogForm.formState.isSubmitting,
      disabled: !dialogForm.formState.isValid,
    },
    SecondaryActionProps: {
      children: "Voltar",
      onClick: () => setContactFormDialogOpen(false),
    },
    title: "Contato",
    subtitle:
      "Preencha o formulário com seus dados e uma mensagem e um de nossos representantes irá atendê-lo na primeira oportunidade.",
    EmailInputProps: {
      label: "E-mail",
      placeholder: "Ex: joao.alves@gmail.com",
      ...dialogForm.register("email"),
    },
    MessageInputProps: {
      label: "Mensagem",
      placeholder: "Ex: Gostaria de saber como funciona o curso de...",
      ...dialogForm.register("message"),
    },
    NameInputProps: {
      label: "Nome completo",
      placeholder: "Ex: João Alves da Silva",
      ...dialogForm.register("name"),
    },
    PhoneInputProps: {
      onValueChange: (values) => {
        dialogForm.setValue("phone", values.formattedValue);
      },
      label: "Número de telefone",
      placeholder: "Ex: (99) 9-8765-4321",
      ...dialogForm.register("phone"),
    },
    BackdropProps: {
      open: contactFormDialogOpen,
      onClickAway: () => {
        if (contactFormDialogOpen) {
          setContactFormDialogOpen(false);
        }
      },
    },
  };

  const mobileMenuProps: MainLayoutProps["MobileMenuProps"] = {
    menuItems: headerProps.items,
    logo: headerProps.logo,
    open: mobileMenuOpen,
    onOpen: () => setMobileMenuOpen(true),
    onClose: () => setMobileMenuOpen(false),
  };

  return (
    <React.Fragment>
      <Head>
        <title>
          Instituto Educacional Gnosis - Cursos de pós-graduação na área de
          medicina.
        </title>
      </Head>
      <CacheProvider value={emotionCache}>
        <CustomTheme>
          <MainLayout
            HeaderProps={headerProps}
            FooterProps={footerProps}
            MobileMenuProps={mobileMenuProps}
            ContactSectionProps={contactSectionProps}
            NewsLetterSectionProps={newsLetterSectionProps}
            ContactDialProps={contactDialProps}
            ContactFormDialogProps={contactFormDialogProps}
          >
            <GlobalSnack />
            <Component {...pageProps} />
          </MainLayout>
        </CustomTheme>
      </CacheProvider>
    </React.Fragment>
  );
}

export default MyApp;
