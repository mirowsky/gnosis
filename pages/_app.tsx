import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "@emotion/cache";
import React from "react";
import CustomTheme from "../theme/CustomTheme";
import { MainLayout } from "@workspace/components/layouts";
import Head from "next/head";
import { useContactForm } from "hooks/useContactForm/useContactForm";
import { useNewsletterInput } from "hooks/useNewsletterInput/useNewsletterInput";
import { useDetectMobile, useMainLayout, useWhatsAppRedirect } from "../hooks";

import { GTM_ID, META_TAGS } from "@workspace/contants";
import { GTMAfterInteractive } from "@workspace/components/utility";

function MyApp(props: AppProps & { emotionCache?: EmotionCache }) {
  const clientSideCache = createEmotionCache({ key: "css" });

  const {
    Component,
    pageProps,
    emotionCache = clientSideCache,
    router,
  } = props;

  const isMobile = useDetectMobile();
  const whatsRedirect = useWhatsAppRedirect(isMobile ? "mobile" : "desktop");

  const contactForm = useContactForm();
  const newsLetterForm = useNewsletterInput();
  const layoutProps = useMainLayout(
    router,
    whatsRedirect,
    contactForm,
    newsLetterForm
  );

  return (
    <React.Fragment>
      <Head>
        <title>{META_TAGS.title}</title>
      </Head>
      <CacheProvider value={emotionCache}>
        <CustomTheme>
          <MainLayout {...layoutProps}>
            <Component {...pageProps} />
          </MainLayout>
        </CustomTheme>
      </CacheProvider>

      <GTMAfterInteractive GTM_ID={GTM_ID} />
    </React.Fragment>
  );
}

export default MyApp;
