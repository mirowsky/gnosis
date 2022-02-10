import { Box } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import { ResponsiveFontSize } from "@workspace/types";
import React from "react";

export type AboutImagesProps = {};

export const AboutImages = (props: AboutImagesProps) => {
  return <Box sx={styles.root}></Box>;
};

export default AboutImages;

const styles = stylesheet.create({
  root: {
    position: "relative",
  },

  imagesContainer: {},

  firstImageBox: {},
  secondImageBox: {},
  thirdImageBox: {},

  firstImage: {},
  secondImage: {},
  thirdImage: {},
});
