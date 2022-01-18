import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import createEmotionCache from "@emotion/cache";
import React from "react";
import CustomTheme from "theme/CustomTheme";

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
          <Component {...pageProps} />
        </CustomTheme>
      </CacheProvider>
    </React.Fragment>
  );
}

export default MyApp;
