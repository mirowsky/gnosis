import { Close, SvgIconComponent } from "@mui/icons-material";
import { Box } from "@mui/material";
import { MotionBox } from "@workspace/components/utility";
import stylesheet from "@workspace/stylesheet";
import { ResponsiveFontSize } from "@workspace/types";
import { Variants } from "framer-motion";
import React from "react";
import { BsFillChatDotsFill } from "react-icons/bs";

export interface ContactDialButtonProps {
  open?: boolean;
  color?: "primary" | "secondary";
  fontSize?: ResponsiveFontSize;
  iconOpen?: React.FC<Partial<SvgIconComponent>>;
  iconClosed?: React.FC<Partial<SvgIconComponent>>;
  onClick?: (...args: unknown[]) => void;
  "aria-label"?: string;
}

export const ContactDialButton = ({
  open,
  color,
  fontSize,
  iconClosed: IconClosed = BsFillChatDotsFill,
  iconOpen: IconOpen = Close,
  onClick = () => {},
  ...props
}: ContactDialButtonProps) => {
  const styles = React.useMemo(
    () => _styles(color, fontSize),
    [color, fontSize]
  );

  return (
    <Box
      aria-label={
        props["aria-label"] ||
        "Botão de atendimento rápido - Clique para exibir as opções ou deixar de exibí-las"
      }
      sx={styles.root}
      component="button"
      onClick={onClick}
    >
      <MotionBox
        sx={styles.icon}
        variants={VARIANTS}
        initial="closed"
        animate={open ? "open" : "closed"}
      >
        <IconOpen />
      </MotionBox>
      <MotionBox
        sx={styles.icon}
        variants={VARIANTS}
        initial="open"
        animate={open ? "closed" : "open"}
      >
        <IconClosed />
      </MotionBox>
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
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  });
