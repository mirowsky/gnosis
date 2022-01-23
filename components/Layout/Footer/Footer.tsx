import { Box, IconButton, Theme, Typography, SxProps } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";
import { FOOTER_TEST_ID } from "./constants";

export interface FooterProps {
  copyright: string;
  contacts: string[];
  emailContacts: string[];
  socials: Array<{
    icon: React.FunctionComponent;
    onClick: (...args: unknown[]) => void;
  }>;
}

const Footer = ({
  contacts = [],
  copyright = "",
  emailContacts = [],
  socials = [],
}: FooterProps) => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.grid}>
        {/* Contacts */}
        <Box
          data-testid={FOOTER_TEST_ID.CONTACTS_CONTAINER.toString()}
          sx={styles.contactContainer}
        >
          <Typography
            variant="h5"
            fontWeight="bolder"
            color="primary.contrastText"
          >
            Contato
          </Typography>
          {contacts.map((contact, index) => {
            return (
              <Typography
                variant="h5"
                fontWeight="bold"
                key={index}
                color="primary.contrastText"
                sx={styles.contactItem}
              >
                {contact}
              </Typography>
            );
          })}
        </Box>
        {/* Email contacts */}
        <Box
          data-testid={FOOTER_TEST_ID.EMAIL_CONTACT_CONTAINER}
          sx={styles.emailContactContainer}
        >
          <Typography
            variant="h5"
            fontWeight="bolder"
            color="primary.contrastText"
          >
            Contato por email
          </Typography>

          {emailContacts.map((emailContact, index) => {
            return (
              <Typography
                variant="h5"
                fontWeight="bold"
                key={index}
                color="primary.contrastText"
                sx={styles.emailItem}
              >
                {emailContact}
              </Typography>
            );
          })}
        </Box>

        {/* Social icons */}
        <Box
          data-testid={FOOTER_TEST_ID.SOCIALS_CONTAINER}
          sx={styles.socialContainer}
        >
          {socials.map(({ icon: Icon, onClick }, index) => {
            return (
              <IconButton
                size="large"
                sx={styles.socialItem}
                onClick={onClick}
                key={index}
              >
                <Icon />
              </IconButton>
            );
          })}
        </Box>

        {/* Copyright text */}

        <Box sx={styles.copyrightContainer}>
          <Typography sx={styles.copyright} variant="caption" fontWeight="bold">
            {copyright}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

const contactStyles = {
  flexDirection: "column",
  gap: (theme) => ({ xs: theme.spacing(2) }),
  display: "flex",
  justifyContent: "center",
  alignItems: { xs: "center", lg: "flex-start" },
} as SxProps<Theme>;

const styles = stylesheet.create({
  root: {
    display: "flex",
    width: "100%",
    backgroundColor: (theme) => theme.palette.primary.main,
    p: (theme) => ({ xs: theme.spacing(4) }),
  },
  grid: {
    display: "grid",
    width: "100%",
    height: "100%",
    justifyItems: "center",
    gridTemplateColumns: {
      xs: "1fr",
      lg: "minmax(0, 0.33fr) minmax(0, 0.33fr) minmax(0, 0.33fr)",
    },
    gridTemplateRows: { xs: "minmax(0, 1fr)" },
    gap: (theme) => ({ xs: theme.spacing(6), lg: "0px" }),
  },

  // Container
  contactContainer: contactStyles,
  emailContactContainer: contactStyles,
  socialContainer: {
    ...contactStyles,
    flexDirection: { xs: "row" },
  },
  copyrightContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    textAlign: "center",
    py: (theme) => ({ xs: theme.spacing(2), lg: theme.spacing(4) }),
    gridColumn: { lg: "1/4" },
  },

  //Items
  contactItem: {
    color: (theme) => theme.palette.primary.contrastText,
  },
  emailItem: {
    color: (theme) => theme.palette.primary.contrastText,
  },
  socialItem: {
    color: (theme) => theme.palette.primary.contrastText,
  },
  copyright: {
    color: (theme) => theme.palette.primary.contrastText,
  },
});
