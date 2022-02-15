import {
  Backdrop,
  Box,
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";
import { SvgIconComponent } from "@mui/icons-material";

export type ContactDialItem = {
  icon: SvgIconComponent;
  label: string;
  action: (...args: unknown[]) => void;
};

export type ContactDialProps = {
  open: boolean;
  handleClose: (...args: unknown[]) => void;
  handleOpen: (...args: unknown[]) => void;
  actions: ContactDialItem[];
};

export const ContactDial = ({
  open = false,
  handleClose = () => {},
  handleOpen = () => {},
  actions = [],
}: ContactDialProps) => {
  return (
    <Box sx={styles.root}>
      <Backdrop open={open} />
      <SpeedDial
        ariaLabel="Menu de contato rápido"
        sx={styles.dial}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        open={open}
      >
        {actions.map(({ action, icon: Icon, label }, index) => (
          <SpeedDialAction
            key={label}
            icon={Icon}
            tooltipTitle={label}
            tooltipOpen
            onClick={action}
          />
        ))}
      </SpeedDial>
    </Box>
  );
};

export default ContactDial;

const styles = stylesheet.create({
  root: {
    height: 330,
    transform: "translateZ(0px)",
    flexGrow: 1,
  },
  dial: {
    position: "absolute",
    bottom: 16,
    right: 16,
  },
});
