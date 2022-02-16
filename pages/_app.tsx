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
          {/* <MainLayout HeaderProps={HEADER_PROPS}> */}
          <Component {...pageProps} />
          {/* </MainLayout> */}
        </CustomTheme>
      </CacheProvider>
    </React.Fragment>
  );
}

export default MyApp;

// const FOOTER_PROPS: MainLayoutProps["FooterProps"] = {};

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
