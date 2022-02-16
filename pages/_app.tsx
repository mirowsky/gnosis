import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "@emotion/cache";
import React from "react";
import CustomTheme from "theme/CustomTheme";
import "../styles/global.styles.css";
import { MainLayout, MainLayoutProps } from "@workspace/components/layouts";

function MyApp(props: AppProps & { emotionCache?: EmotionCache }) {
  const clientSideCache = createEmotionCache({ key: "css" });

  const {
    Component,
    pageProps,
    emotionCache = clientSideCache,
    router,
  } = props;

  return (
    <React.Fragment>
      <CacheProvider value={emotionCache}>
        <CustomTheme>
          <MainLayout
            HeaderProps={HEADER_PROPS}
            FooterProps={FOOTER_PROPS}
            MobileMenuProps={MOBILE_MENU_PROPS}
            ContactSectionProps={CONTACT_SECTION_PROPS}
            NewsLetterSectionProps={NEWSLETTER_SECTION_PROPS}
            ContactDialProps={CONTACT_DIAL_PROPS}
            ContactFormDialogProps={{}}
          >
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
  title: "",
};

const CONTACT_DIAL_PROPS: MainLayoutProps["ContactDialProps"] = {
  ContactDialButtonProps: {
    color: "primary",
    open: false,
  },
  items: [],
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
  cta: {
    label: "Contate-nos",
    onClick: () => {},
  },
  burguerOpen: false,
  items: [
    { label: "Sobre nós", onClick: () => {} },
    { label: "Cursos", onClick: () => {} },
    { label: "Blog", onClick: () => {} },
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
