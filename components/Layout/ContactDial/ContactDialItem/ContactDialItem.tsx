import { SvgIconComponent } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";
import { DEFAULT_ContactDialItem_TESTING_PROPS } from "./ContactDialItem.fixture";

export type ContactDialItemProps = {
  icon: SvgIconComponent;
  label: string;
  action: (...args: unknown[]) => void;
};

export const ContactDialItem = ({
  action,
  icon: Icon,
  label,
}: ContactDialItemProps = DEFAULT_ContactDialItem_TESTING_PROPS) => {
  return (
    <Box onClick={action} sx={styles.root}>
      <Box sx={styles.labelPaper}>
        <Typography variant="body1" sx={styles.label}>
          {label}
        </Typography>
      </Box>

      <Box sx={styles.iconPaper}>
        <Box sx={styles.icon} component={Icon} />
      </Box>
    </Box>
  );
};

export default ContactDialItem;

const styles = stylesheet.create({
  root: {
    display: "flex",
    gap: (theme) => theme.spacing(2),
  },

  labelPaper: {
    height: "auto",
    backgroundColor: (theme) => theme.palette.background.paper,
    boxShadow: (theme) => theme.shadows[4],
    p: 2,
    borderRadius: "6px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  label: {
    color: (theme) => theme.palette.grey[700],
    maxWidth: "30ch",
  },

  iconPaper: {
    backgroundColor: (theme) => theme.palette.background.paper,
    boxShadow: (theme) => theme.shadows[4],
    p: 2,
    borderRadius: "6px",
    height: "fit-content",
  },
  icon: {
    color: (theme) => theme.palette.grey[700],
  },
});
