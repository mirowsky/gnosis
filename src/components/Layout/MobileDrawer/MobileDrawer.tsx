import { SwipeableDrawer, Paper, Box, Button } from "@mui/material";
import React from "react";
import { stylesheet } from "src/theme/stylesheet";
import { MOBILE_DRAWER_TEST_ID } from "./constants";

type HeaderItem = {
  onClick: (...args: unknown[]) => unknown;
  label: string;
};

export interface MobileMenuProps {
  open?: boolean;
  menuItems?: HeaderItem[];
  onClose: (...args: unknown[]) => void;
  onOpen: (...args: unknown[]) => void;
  logo?: {
    src: string;
    alt?: string;
  };
}

export const MobileMenu = ({
  open = false,
  menuItems = [],
  onClose,
  onOpen,
  logo = {
    src: "https://via.placeholder.com/1500",
    alt: "Alternative Text, replace me",
  },
}: MobileMenuProps) => {
  return (
    <SwipeableDrawer
      sx={styles.root}
      onClose={onClose}
      onOpen={onOpen}
      open={open}
      anchor="left"
      data-testid={MOBILE_DRAWER_TEST_ID.root}
    >
      <Box sx={styles.container} component={Paper} elevation={0}>
        <Box component={Paper} square elevation={5} sx={styles.logoContainer}>
          <Box component="img" alt={logo.alt} src={logo.src} sx={styles.logo} />
        </Box>

        <Box sx={styles.list}>
          {menuItems.map((value, index) => {
            return (
              <Button
                sx={styles.listItem}
                key={index}
                variant="text"
                color="inherit"
                fullWidth
                onClick={value.onClick}
              >
                {value.label}
              </Button>
            );
          })}
        </Box>
      </Box>
    </SwipeableDrawer>
  );
};

export default MobileMenu;

const styles = stylesheet.create({
  logo: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
  },

  listItem: {
    py: { xs: 3 },
    fontWeight: 900,
    fontSize: { xs: "2em" },
    borderRadius: "0px",
  },

  listIcon: {
    fontSize: { xs: "1em" },
  },

  logoContainer: {
    width: "100%",
    height: { xs: "10em" },
    p: { xs: "2.5em" },
    overflow: "hidden",
  },

  root: {
    fontSize: "10px",
  },

  list: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "flex-start",
    color: (theme) => theme.palette.grey[800],
  },
  container: {
    height: "100%",
    minWidth: { xs: "25em" },
  },
});
