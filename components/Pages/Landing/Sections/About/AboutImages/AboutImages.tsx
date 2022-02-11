import { Box } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";
import image from "@workspace/images/about-full.webp";
import AboutImagesCircle from "../AboutImagesCircle/AboutImagesCircle";
import { Circle } from "@workspace/svg";
import { ResponsiveStyleValue } from "@workspace/types";
import { Properties } from "csstype";

export type AboutImagesProps = {
  maxWidth?: ResponsiveStyleValue<Properties["maxWidth"]>;
};

export const AboutImages = ({
  maxWidth = { xs: "70vw" },
}: AboutImagesProps) => {
  const styles = React.useMemo(() => _styles(maxWidth), [maxWidth]);

  return (
    <Box sx={styles.root}>
      <Box sx={styles.hollowCircleBox}>
        <Circle color="#A1ABB7" fontSize={"12vw"} />
      </Box>

      <Box sx={styles.rightCircleBox}>
        <AboutImagesCircle fontSize={{ xs: "1.4vw" }} color="primary" />
      </Box>
      <Box sx={styles.leftCircleBox}>
        <AboutImagesCircle fontSize={{ xs: "1.4vw" }} color="secondary" />
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

const _styles = (
  maxWidth: ResponsiveStyleValue<Properties["maxWidth"]> = { xs: "70vw" }
) =>
  stylesheet.create({
    root: {
      position: "relative",
      maxWidth: maxWidth,
      margin: "auto",
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
