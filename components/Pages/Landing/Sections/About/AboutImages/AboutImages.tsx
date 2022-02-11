import { Box } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";
import image from "@workspace/images/about-full.webp";
import AboutImagesCircle from "../AboutImagesCircle/AboutImagesCircle";
import { useScreenSize } from "@workspace/hooks";
import { pixelToRem } from "utility/pixelToRem";
export type AboutImagesProps = {};

export const AboutImages = (props: AboutImagesProps) => {
  return (
    <Box margin="auto" sx={styles.root}>
      <Box sx={styles.rightCircleBox}>
        <AboutImagesCircle color="primary" />
      </Box>
      <Box sx={styles.leftCircleBox}>
        <AboutImagesCircle color="secondary" />
      </Box>

      <Box sx={styles.imageBox}>
        <Box
          sx={styles.image}
          component="img"
          src={image as unknown as string}
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
    left: 0,
    top: 0,
    zIndex: -1,
  },
  rightCircleBox: {
    position: "absolute",
    right: 0,
    top: 0,
    zIndex: -1,
  },
});
