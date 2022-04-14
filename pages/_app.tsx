import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "@emotion/cache";
import React from "react";
import CustomTheme from "../src/theme/CustomTheme";
import Head from "next/head";
import {
  useDetectMobile,
  useWhatsAppRedirect,
  useContactForm,
  useNewsletterInput,
  useMainLayout,
} from "@workspace/hooks";
import { GTM_ID, META_TAGS } from "@workspace/constants";
import { GTMAfterInteractive, MainLayout } from "@workspace/components/shared";

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
