import { Box } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";
import image_3 from "@workspace/images/about-us-pic-1.webp";
import image_2 from "@workspace/images/about-us-pic-2.webp";
import image_1 from "@workspace/images/about-us-pic-3.webp";

export type AboutImagesProps = {};

export const AboutImages = (props: AboutImagesProps) => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.imagesContainer}>
        <Box sx={styles.firstImageBox}>
          <Box
            sx={styles.firstImage}
            component="img"
            src={image_1 as unknown as string}
          />
        </Box>

        <Box sx={styles.secondImageBox}>
          <Box
            sx={styles.secondImage}
            component="img"
            src={image_2 as unknown as string}
          />
        </Box>

        <Box sx={styles.thirdImageBox}>
          <Box
            sx={styles.thirdImage}
            component="img"
            src={image_3 as unknown as string}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default AboutImages;

const styles = stylesheet.create({
  root: {
    position: "relative",
    fontSize: "1rem",
  },

  imagesContainer: {
    display: "grid",
    gridTemplateColumns:
      "minmax(0, 0.333fr) minmax(0, 0.333fr) minmax(0, 0.333fr)",
    position: "relative",
    height: { xs: "56.65em" },
  },

  firstImageBox: {
    height: "100%",
    position: "absolute",
    gridColumn: "1/2",
  },
  secondImageBox: {
    height: "100%",
    position: "absolute",
    gridColumn: "2/3",
  },
  thirdImageBox: {
    height: "100%",
    position: "absolute",
    gridColumn: "3/4",
  },

  firstImage: {
    objectFit: "contain",
    width: "100%",
    height: "100%",
  },
  secondImage: {
    objectFit: "contain",
    width: "100%",
    height: "100%",
  },
  thirdImage: {
    objectFit: "contain",
    width: "100%",
    height: "100%",
  },
});
