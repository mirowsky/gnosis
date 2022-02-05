import { Box, Typography } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import InputWithButton, {
  InputWithButtonProps,
} from "../../../../../Common/InputWithButton/InputWithButton";
import React from "react";

export type NewsLetterSectionProps = {
  img: {
    src: string;
    alt: string;
  };
  InputWithButtonProps: InputWithButtonProps;
};

const NewsLetterSection = ({
  img = {
    alt: "This is a placeholder, change me",
    src: "https://via.placeholder.com",
  },
}: NewsLetterSectionProps) => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.container}>
        <Box sx={styles.pictureContainer}>
          <Box
            sx={styles.picture}
            component="img"
            src={img.src}
            alt={img.alt}
          />
        </Box>

        <Box sx={styles.formContainer}>
          <Typography variant="h3" sx={styles.formTitle}>
            Assine nossa Newsletter e fique por dentro das novidades.
          </Typography>

          <InputWithButton fontSize={{ xs: "0.75rem", lg: "1rem" }} />
        </Box>
      </Box>
    </Box>
  );
};

export default NewsLetterSection;

const styles = stylesheet.create({
  root: {
    width: "100%",
    height: (theme) => ({ xs: theme.spacing(68.75), lg: theme.spacing(62) }),
    backgroundColor: (theme) => theme.palette.secondary.light,
    px: (theme) => ({ xs: theme.spacing(4) }),
  },
  container: {
    display: "grid",
    width: "100%",
    height: "100%",
    position: "relative",
    gridTemplateColumns: { xs: "1fr", lg: "minmax(0, 0.5fr) minmax(0, 0.5fr)" },
    gridTemplateRows: { xs: "minmax(0, 0.5fr) minmax(0,  0.5fr)", lg: "1fr" },
  },

  pictureContainer: {
    height: { xs: "100%", lg: "125%" },
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    gridColumn: { lg: "1/2" },
    order: { xs: 1, lg: 0 },
    gridRow: { xs: "2/3", lg: "initial" },
  },

  picture: {
    objectFit: "contain",
    height: "100%",
    width: "100%",
  },

  formContainer: {
    order: { xs: 0, lg: 1 },
    width: "100%",
    height: "100%",
    gridColumn: { lg: "2/3" },
    display: "flex",
    flexDirection: "column",
    maxWidth: { sm: "45ch" },
    textAlign: { sm: "center", lg: "left" },
    gap: (theme) => ({ xs: theme.spacing(5) }),
    justifyContent: { xs: "center" },
    justifySelf: { sm: "center", lg: "unset" },
  },

  formTitle: {
    color: (theme) => theme.palette.primary.main,
    fontWeight: 700,
  },
});
