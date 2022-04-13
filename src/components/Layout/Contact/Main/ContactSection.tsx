import { Box, Typography } from "@mui/material";
import { SlideInV2 } from "src/components/animations";
import { useIntersectionObserver } from "src/hooks";
import stylesheet from "src/theme/stylesheet";
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
  const { isIntersecting, ref } = useIntersectionObserver({
    once: true,
    rootMargin: "500px",
  });

  return (
    <Box ref={ref} id={id} sx={{ ...styles.root, ...sx }}>
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

        <Box sx={styles.pictureContainer}>
          {isIntersecting && (
            <Box
              sx={styles.picture}
              component="img"
              src={img.src}
              alt={img.alt}
            />
          )}
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
    background: {
      xs: "none",
      lg: "radial-gradient(circle at 72% 60%, hsla(229deg, 90%, 87%, 1), rgba(255, 255, 255, 0) 30%)",
    },
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
