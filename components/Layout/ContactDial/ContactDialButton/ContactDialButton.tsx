import { Close, SvgIconComponent, WhatsApp } from "@mui/icons-material";
import { Box } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import { ResponsiveFontSize } from "@workspace/types";
import React from "react";
import { DEFAULT_ContactDialButton_TESTING_PROPS } from "./ContactDialButton.fixture";

export type ContactDialButtonProps = {
  open: boolean;
  color?: "primary" | "secondary";
  fontSize?: ResponsiveFontSize;
  iconOpen?: React.FC<Partial<SvgIconComponent>>;
  iconClosed?: React.FC<Partial<SvgIconComponent>>;
};

export const ContactDialButton = ({
  open,
  color,
  fontSize,
  iconClosed: IconClosed = WhatsApp,
  iconOpen: IconOpen = Close,
}: ContactDialButtonProps = DEFAULT_ContactDialButton_TESTING_PROPS) => {
  const styles = React.useMemo(
    () => _styles(color, fontSize),
    [color, fontSize]
  );

  return (
    <Box sx={styles.root} component="button">
      {(open && <IconOpen />) || <IconClosed />}
    </Box>
  );
};

export default ContactDialButton;

const _styles = (
  color: "primary" | "secondary" = "primary",
  fontSize: ResponsiveFontSize = { xs: "1rem" }
) =>
  stylesheet.create({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: "none",
      outline: "none",
      fontSize: fontSize,
      width: "3.5em",
      height: "3.5em",
      borderRadius: "50%",
      backgroundColor: (theme) => theme.palette[color].main,
      boxShadow: (theme) => theme.shadows[5],
      color: (theme) => theme.palette[color].contrastText,
      cursor: "pointer",
    },
  });
