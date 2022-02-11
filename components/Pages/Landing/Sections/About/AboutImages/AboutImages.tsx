import { Box } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";
import image from "@workspace/images/about-full.webp";
import AboutImagesCircle from "../AboutImagesCircle/AboutImagesCircle";
import { Circle } from "@workspace/svg";
import { ResponsiveStyleValue } from "@workspace/types";
import { Properties } from "csstype";
import { useComponentSize } from "@workspace/hooks";

export type AboutImagesProps = {};

export const AboutImages = (props: AboutImagesProps) => {
  const { height, ref, width } = useComponentSize();

  return (
    <Box ref={ref} sx={styles.root}>
      <Box sx={styles.hollowCircleBox}>
        <Circle color="#A1ABB7" fontSize={`calc(${width}px * 0.18)`} />
      </Box>

      <Box sx={styles.rightCircleBox}>
        <AboutImagesCircle
          fontSize={{ xs: `calc(${width}px * 0.02)` }}
          color="primary"
        />
      </Box>
      <Box sx={styles.leftCircleBox}>
        <AboutImagesCircle
          fontSize={{ xs: `calc(${width}px * 0.02)` }}
          color="secondary"
        />
      </Box>

      <Box sx={styles.imageBox}>
        <Box
          sx={styles.image}
          component="img"
          src={"/images/about-full.webp"}
        />
      </Box>
    </Box>
  );
};

export default AboutImages;

const styles = stylesheet.create({
  root: {
    position: "relative",
  },

  imageBox: {},
  image: {
    objectFit: "contain",
    width: "100%",
    height: "100%",
  },

  leftCircleBox: {
    position: "absolute",
    left: "-5%",
    top: "30%",
    zIndex: -1,
  },
  rightCircleBox: {
    position: "absolute",
    right: "-5%",
    top: "-10%",
    zIndex: -1,
  },

  hollowCircleBox: {
    position: "absolute",
    bottom: "-10%",
    right: "-5%",
  },
});
