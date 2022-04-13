import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import {
  SocialMediaShareTray,
  SocialMediaShareTrayProps,
} from "../SocialMediaShareTray/SocialMediaShareTray";
import { ThemeStyles } from "@workspace/types";
import stylesheet from "src/theme/stylesheet";
import { MotionBox } from "src/components/Utility";
import BlogSection, {
  BlogSectionProps,
} from "../../../Layout/Blog/Main/BlogSection";
import { useIntersectionObserver } from "src/hooks";

/* eslint-disable-next-line */
export interface BlogPageProps {
  content?: string;
  title?: string;
  featuredImage?: string;
  SocialMediaShareTrayProps?: SocialMediaShareTrayProps;
  BlogSectionProps: BlogSectionProps;
  sx?: ThemeStyles;
}

export function BlogPageLayout({
  content = "",
  featuredImage = "https://via.placeholder.com/1500",
  title = "Placeholder title",
  sx,
  SocialMediaShareTrayProps,
  BlogSectionProps,
  ...rest
}: BlogPageProps) {
  const { ref, isIntersecting: inView } = useIntersectionObserver({
    once: false,
  });

  const { ref: postsRef, isIntersecting: postsInView } =
    useIntersectionObserver({
      once: true,
      threshold: 0.2,
    });

  return (
    <Box
      className="Atlas-BlogLayoutV1-root page"
      sx={defaultStyles.root}
      {...rest}
    >
      <Box className="Atlas-BlogLayoutV1-pattern" />
      <Box className="Atlas-BlogLayoutV1-fixedSocialMediaTrayContainer">
        <AnimatePresence>
          {!inView && postsInView && (
            <MotionBox
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <SocialMediaShareTray {...SocialMediaShareTrayProps} />
            </MotionBox>
          )}
        </AnimatePresence>
      </Box>
      <Box className="Atlas-BlogLayoutV1-container">
        <Box className="Atlas-BlogLayoutV1-header">
          <Stack
            className="Atlas-BlogLayoutV1-headerInnerContainer"
            direction="column"
          >
            <Box
              component={Typography}
              variant="h1"
              className="Atlas-BlogLayoutV1-title"
            >
              {title}
            </Box>
          </Stack>
        </Box>

        <Container
          className="Atlas-BlogLayoutV1-featuredImage-container"
          maxWidth="md"
          ref={ref}
        >
          <Box
            component="figure"
            className="Atlas-BlogLayoutV1-featuredImage-figure"
          >
            <Box
              className="Atlas-BlogLayoutV1-featuredImage"
              src={featuredImage}
              component="img"
            />
          </Box>
        </Container>

        <Container
          ref={postsRef}
          className="Atlas-BlogLayoutV1-contentContainer"
        >
          <Box
            className="Atlas-BlogLayoutV1-content"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </Container>
      </Box>

      {BlogSectionProps.items.length > 0 && (
        <Box
          sx={{
            py: (theme) => theme.spacing(6),
            bgcolor: (theme) => theme.palette.bg.primary,
          }}
        >
          <Container
            className="Atlas-BlogLayoutV1-latestPosts-container"
            maxWidth="lg"
          >
            <BlogSection {...BlogSectionProps} />
          </Container>
        </Box>
      )}
    </Box>
  );
}

export default BlogPageLayout;

const defaultStyles = stylesheet.create({
  root: {
    mt: 5,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    fontFamily: "inherit",
    position: "relative",
    textRendering: "optimizeLegibility",
    fontSmooth: "always",
    fontSize: "1rem",

    ".Atlas-BlogLayoutV1-latestPosts-container": {},

    ".Atlas-BlogLayoutV1-pattern": {
      width: "100%",
      height: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      zIndex: -1,
    },

    ".Atlas-BlogLayoutV1-fixedSocialMediaTrayContainer": {
      position: "fixed",
      right: 0,
      top: "20%",
      display: "none",

      "@media (min-width: 1024px)": {
        display: "unset",
      },
    },

    ".Atlas-BlogLayoutV1-content": {
      width: "100%",

      "& img": {
        width: "100%",
      },
    },

    ".Atlas-BlogLayoutV1-featuredImage": {
      maxWidth: "100%",
      width: "100%",
      height: "auto",
    },

    ".Atlas-BlogLayoutV1-contentContainer": {
      mt: "3.5em",
      maxWidth: { sm: "680px" },
      px: "24px",
      position: "relative",

      "*": {
        fontSize: "clamp(16px, 18px, 30px)!important",
        wordBreak: "break-word",
        wordWrap: "break-word",
        letterSpacing: { xs: "-0.003px" },
        lineHeight: { xs: "42px" },
      },
    },

    ".Atlas-BlogLayoutV1-featuredImage-figure": {
      width: "100%",
      height: "auto",
      position: "relative",
      m: 0,
      p: 0,
    },

    ".Atlas-BlogLayoutV1-featuredImage-container": {
      p: 0,
      my: "3.5em",
    },

    ".Atlas-BlogLayoutV1-container": {
      width: "100%",
    },

    ".Atlas-BlogLayoutV1-headerInnerContainer": {
      gap: "10px",

      ".Atlas-BlogLayoutV1-title": {
        m: 0,
        p: 0,
        fontWeight: 700,
        fontSize: { xs: "3.5vh", lg: "5vh" },
        textTransform: "capitalize",
        color: (theme) => theme.palette.secondary.main,
      },
    },

    ".Atlas-BlogLayoutV1-header": {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      px: "20px",
    },
  },
});
