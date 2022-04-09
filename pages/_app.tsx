import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "@emotion/cache";
import React from "react";
import CustomTheme from "../theme/CustomTheme";
import { MainLayout } from "@workspace/components/layouts";
import Head from "next/head";
import { useContactForm } from "hooks/useContactForm/useContactForm";
import { useNewsletterInput } from "hooks/useNewsletterInput/useNewsletterInput";
import { useMainLayout } from "../hooks";

function MyApp(props: AppProps & { emotionCache?: EmotionCache }) {
  const clientSideCache = createEmotionCache({ key: "css" });

  const {
    Component,
    pageProps,
    emotionCache = clientSideCache,
    router,
  } = props;

  const contactForm = useContactForm();
  const newsLetterForm = useNewsletterInput();
  const layoutProps = useMainLayout(router, contactForm, newsLetterForm);

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
          <MainLayout {...layoutProps}>
            <Component {...pageProps} />
          </MainLayout>
        </CustomTheme>
      </CacheProvider>
    </React.Fragment>
  );
}

export default MyApp;
