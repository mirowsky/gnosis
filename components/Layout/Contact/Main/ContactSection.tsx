import { Box, Typography } from "@mui/material";
import { SlideInV2 } from "@workspace/animations";
import stylesheet from "@workspace/stylesheet";
import { Blob } from "@workspace/svg";
import { ThemeStyles } from "@workspace/types";
import React from "react";
import ContactForm, { ContactFormProps } from "../ContactForm/ContactForm";
import { DEFAULT_ContactSection_TESTING_PROPS } from "./ContactSection.fixture";

export type ContactSectionProps = {
  sectionTitle?: string;
  ContactFormProps?: ContactFormProps;
  img: {
    src: string;
    alt: string;
  };
  sx?: ThemeStyles;
  id?: string;
};

export const ContactSection = ({
  ContactFormProps,
  sectionTitle,
  img,
  sx,
  id,
}: ContactSectionProps = DEFAULT_ContactSection_TESTING_PROPS) => {
  return (
    <Box id={id} sx={{ ...styles.root, ...sx }}>
      <Box sx={styles.sectionTitleContainer}>
        <SlideInV2 animate="scroll" viewport={{ margin: "200px", once: true }}>
          <Typography variant="h2" component="h3" sx={styles.sectionTitle}>
            {sectionTitle}
          </Typography>
        </SlideInV2>
      </Box>

      <Box sx={styles.grid}>
        <Box sx={styles.formContainer}>
          <SlideInV2
            animate="scroll"
            viewport={{ margin: "200px", once: true }}
          >
            <ContactForm {...ContactFormProps} />
          </SlideInV2>
        </Box>

        <Box sx={styles.blobContainer}>
          <Blob sx={styles.blob} />
        </Box>

        <Box sx={styles.pictureContainer}>
          <Box
            sx={styles.picture}
            component="img"
            src={img.src}
            alt={img.alt}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default ContactSection;

const styles = stylesheet.create({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  grid: {
    pt: (theme) => ({ xs: theme.spacing(6) }),
    display: "grid",
    gridTemplateColumns: {
      xs: "minmax(0, 1fr)",
      lg: "minmax(0, 0.5fr) minmax(0, 0.5fr)",
    },
    position: "relative",
    gap: (theme) => ({ lg: theme.spacing(4) }),
  },

  formContainer: {
    gridColumn: { lg: "1/2" },
    alignSelf: { lg: "center" },
    pb: (theme) => ({ xs: theme.spacing(8) }),
  },
  pictureContainer: {
    display: { xs: "none", lg: "flex" },
    width: "100%",
    height: "100%",
    position: "absolute",
    justifySelf: { lg: "center" },
    justifyContent: { lg: "center" },
    gridColumn: { xs: "2/3" },
  },

  blobContainer: {
    position: "absolute",
    display: { xs: "none", lg: "flex" },
    width: "100%",
    height: "100%",
    justifySelf: { lg: "flex-end" },
    justifyContent: { lg: "center" },
    gridColumn: { xs: "2/3" },
  },
  blob: {
    fontSize: "0.9em",
    filter: "blur(85px)",
    transform: "translateX(10%)",
  },

  sectionTitleContainer: {
    display: "flex",
    width: "100%",
    justifyContent: "flex-start",
  },
  sectionTitle: {
    color: (theme) => theme.palette.primary.main,
    fontWeight: 700,
    maxWidth: { lg: "25ch" },
  },

  picture: {
    objectFit: "contain",
    height: "100%",
    width: "100%",
  },
});
