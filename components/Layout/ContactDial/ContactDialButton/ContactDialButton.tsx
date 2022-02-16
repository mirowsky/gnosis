import { Close, SvgIconComponent, WhatsApp } from "@mui/icons-material";
import { Box } from "@mui/material";
import { MotionBox } from "@workspace/components/utility";
import stylesheet from "@workspace/stylesheet";
import { ResponsiveFontSize } from "@workspace/types";
import { Variants } from "framer-motion";
import React from "react";

export type ContactDialButtonProps = {
  open?: boolean;
  color?: "primary" | "secondary";
  fontSize?: ResponsiveFontSize;
  iconOpen?: React.FC<Partial<SvgIconComponent>>;
  iconClosed?: React.FC<Partial<SvgIconComponent>>;
  onClick?: (...args: unknown[]) => void;
};

export const ContactDialButton = ({
  open,
  color,
  fontSize,
  iconClosed: IconClosed = WhatsApp,
  iconOpen: IconOpen = Close,
  onClick = () => {},
}: ContactDialButtonProps) => {
  const styles = React.useMemo(
    () => _styles(color, fontSize),
    [color, fontSize]
  );

  return (
    <Box sx={styles.root} component="button" onClick={onClick}>
      <MotionBox
        sx={styles.icon}
        component={IconOpen}
        variants={VARIANTS}
        initial="closed"
        animate={open ? "open" : "closed"}
      />
      <MotionBox
        sx={styles.icon}
        component={IconClosed}
        variants={VARIANTS}
        initial="open"
        animate={open ? "closed" : "open"}
      />
    </Box>
  );
};

export default ContactDialButton;

const VARIANTS: Variants = {
  open: {
    opacity: 1,
    scale: 1,
  },
  closed: {
    opacity: 0,
    scale: 0,
  },
};

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
      position: "relative",
    },

    icon: {
      position: "absolute",
      fontSize: "1.5em",
    },
  });
