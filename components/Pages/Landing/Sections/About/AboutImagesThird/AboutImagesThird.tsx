import { Box } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import { ResponsiveFontSize } from "@workspace/types";
import React from "react";
import AboutImagesCircle from "../AboutImagesCircle/AboutImagesCircle";
import image from "@workspace/images/about-us-pic-1.webp";

export type AboutImagesThirdProps = {
  fontSize?: ResponsiveFontSize;
};

export const AboutImagesThird = ({
  fontSize = { xs: "1rem" },
}: AboutImagesThirdProps) => {
  const styles = React.useMemo(() => _styles(fontSize), [fontSize]);

  return (
    <Box sx={styles.root}>
      <Box sx={styles.image} component="img" src={image as unknown as string} />
      <Box sx={styles.circleContainer}>
        <AboutImagesCircle fontSize={{ xs: "1.75em" }} color="primary" />
      </Box>
    </Box>
  );
};

export default AboutImagesThird;

const _styles = (fontSize: ResponsiveFontSize = { xs: "1rem" }) =>
  stylesheet.create({
    root: {
      fontSize: fontSize,
      position: "relative",
      width: "fit-content",
    },

    circleContainer: {
      position: "absolute",
      zIndex: -1,
      top: 0,
      transform: "translateX(100%) translateY(-20%)",
    },
    image: {
      height: "auto",
      objectFit: "contain",
      width: "31.25em",
    },
  });
