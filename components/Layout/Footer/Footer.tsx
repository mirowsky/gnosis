import { Box, IconButton, Typography } from "@mui/material";
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
        <Box
          data-testid={FOOTER_TEST_ID.CONTACTS_CONTAINER.toString()}
          sx={styles.contactContainer}
        >
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

        <Box
          data-testid={FOOTER_TEST_ID.EMAIL_CONTACT_CONTAINER}
          sx={styles.emailContactContainer}
        >
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

        <Box
          data-testid={FOOTER_TEST_ID.SOCIALS_CONTAINER}
          sx={styles.socialItem}
        >
          {socials.map(({ icon: Icon, onClick }, index) => {
            return (
              <IconButton onClick={onClick} key={index}>
                <Icon />
              </IconButton>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;

const styles = stylesheet.create({
  root: {
    display: "flex",
    width: "100%",
  },
  grid: {
    display: "grid",
    gridAutoFlow: "row",
    gridTemplateColumns: {
      xs: "minmax(0, 1fr)",
      lg: "minmax(0, 0.33fr) minmax(0, 0.33fr) minmax(0, 0.33fr)",
    },
  },

  // Container
  contactContainer: {},
  emailContactContainer: {},
  socialContainer: {},
  copyrightContainer: {},

  //Items
  contactItem: {},
  emailItem: {},
  socialItem: {},
  copyright: {},
});
