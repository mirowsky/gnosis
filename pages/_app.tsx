import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "@emotion/cache";
import React from "react";
import CustomTheme from "../theme/CustomTheme";
import { MainLayout, MainLayoutProps } from "@workspace/components/layouts";
import { handleLogoClick, handleMenuClick } from "@workspace/utility";
import { alertStore, GlobalSnack } from "@workspace/components/utility";
import Head from "next/head";
import { useContactForm } from "hooks/useContactForm/useContactForm";
import { QuestionAnswer, WhatsApp } from "@mui/icons-material";
import { useNewsletterInput } from "hooks/useNewsletterInput/useNewsletterInput";

function MyApp(props: AppProps & { emotionCache?: EmotionCache }) {
  const clientSideCache = createEmotionCache({ key: "css" });

  const {
    Component,
    pageProps,
    emotionCache = clientSideCache,
    router,
  } = props;

  const dispatchAlert = alertStore((state) => state.dispatch);

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
          <MainLayout>
            <GlobalSnack />
            <Component {...pageProps} />
          </MainLayout>
        </CustomTheme>
      </CacheProvider>
    </React.Fragment>
  );
}

export default MyApp;
