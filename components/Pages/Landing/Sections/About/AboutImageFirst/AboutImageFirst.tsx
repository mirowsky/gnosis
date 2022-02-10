import React from "react";
import image from "@workspace/images/about-us-pic-3.webp";
import { Box } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import AboutImagesCircle from "../AboutImagesCircle/AboutImagesCircle";
import { ResponsiveFontSize } from "@workspace/types";

export type AboutImageFirstProps = {
  fontSize?: ResponsiveFontSize;
};

export const AboutImageFirst = ({
  fontSize = { xs: "1rem" },
}: AboutImageFirstProps) => {
  const styles = React.useMemo(() => _styles(fontSize), [fontSize]);

  return (
    <Box sx={styles.root}>
      <Box sx={styles.image} component="img" src={image as unknown as string} />
      <Box sx={styles.circleContainer}>
        <AboutImagesCircle fontSize={{ xs: "2em" }} color="secondary" />
      </Box>
    </Box>
  );
};

export default AboutImageFirst;

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
      top: "50%",
      transform: "translateY(-15%) translateX(-15%)",
    },
    image: {
      height: "auto",
      objectFit: "contain",
      width: "31.25em",
    },
  });
