import { Close } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import { ThemeStyles } from "@workspace/types";
import React from "react";
import SupportMenuItem, {
  SupportMenuItemProps,
} from "../SupportMenuItem/SupportMenuItem";
import { SupportMenu_TEST_ID } from "./SupportMenu.fixture";

export interface SupportMenuProps {
  headerTitle: string;
  headerSubtitle?: string;
  onClick?: (...args: unknown[]) => void;
  items: SupportMenuItemProps[];
  sx?: ThemeStyles;
}

export const SupportMenu = ({
  headerTitle,
  items,
  headerSubtitle,
  onClick: onCloseButtonClick,
  sx,
}: SupportMenuProps) => {
  return (
    <Box sx={{ ...styles.root, ...sx }}>
      <Box sx={styles.header}>
        <Box sx={styles.closeButtonContainer}>
          <IconButton
            data-testid={SupportMenu_TEST_ID.closeButton}
            onClick={onCloseButtonClick}
            sx={styles.closeButton}
          >
            <Close />
          </IconButton>
        </Box>

        <Box sx={styles.titleContainer}>
          <Typography variant="h6" component="h2" sx={styles.title}>
            {headerTitle}
          </Typography>
        </Box>
        <Box sx={styles.subtitleContainer}>
          <Typography variant="subtitle2" component="h3" sx={styles.subtitle}>
            {headerSubtitle}
          </Typography>
        </Box>
      </Box>
      <Box data-testid={SupportMenu_TEST_ID.contentList} sx={styles.content}>
        {items.map((item, index) => {
          return <SupportMenuItem {...item} key={index} />;
        })}
      </Box>
    </Box>
  );
};

export default SupportMenu;

const styles = stylesheet.create({
  root: {
    height: "fit-content",
    minWidth: { lg: "22.5em" },
    fontSize: "1rem",
    maxWidth: "100%",
    position: "relative",
    display: "grid",
    borderRadius: "12px",
    boxShadow: (theme) => theme.shadows[5],
  },

  content: {
    gap: "0.75em",
    display: "grid",
    gridTemplateRows: "repeat(1, minmax(0, 1fr))",
    justifyItems: "center",
    padding: "1em 0.75em",
    maxHeight: '30em',
    overflowY: 'scroll',
    "&::-webkit-scrollbar": {
      width: '5px',
      borderRadius: '50%',
      backgroundColor: theme => theme.palette.primary.light
    }

  },

  header: {
    display: "flex",
    flexDirection: "column",
    bgcolor: (theme) => theme.palette.success.main,
    borderRadius: "12px 12px 0px 0px",
    gap: "0.4em",
    padding: "0.5em 1.25em 2em 1em",
    textAlign: "center",
  },

  closeButtonContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    pointerEvents: "none",
  },
  titleContainer: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
  subtitleContainer: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },

  // -------
  closeButton: {
    color: (theme) => theme.palette.grey[400],
    pointerEvents: "auto",
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    maxWidth: "25ch",
  },
  subtitle: {
    color: "#fff",
    maxWidth: "18ch",
  },
});
