import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "@emotion/cache";
import React from "react";
import CustomTheme from "../src/theme/CustomTheme";
import Head from "next/head";
import { GTM_ID, META_TAGS } from "@workspace/constants";
import { GTMAfterInteractive } from "@workspace/components/shared";
import { Layout } from "@workspace/features";

function MyApp(props: AppProps & { emotionCache?: EmotionCache }) {
  const clientSideCache = createEmotionCache({ key: "css" });

  const {
    Component,
    pageProps,
    emotionCache = clientSideCache,
    router,
  } = props as typeof props & { Component: React.FC };

  return (
    <React.Fragment>
      <Head>
        <title>{META_TAGS.title}</title>
      </Head>
      <CacheProvider value={emotionCache}>
        <CustomTheme>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </CustomTheme>
      </CacheProvider>

      <GTMAfterInteractive GTM_ID={GTM_ID} />
    </React.Fragment>
  );
}

export default MyApp;
