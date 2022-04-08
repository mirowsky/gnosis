import { Close } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";
import SupportMenuItem, {
  SupportMenuItemProps,
} from "../SupportMenuItem/SupportMenuItem";
import { SupportMenu_TEST_ID } from "./SupportMenu.fixture";

export interface SupportMenuProps {
  open: boolean;
  headerTitle: string;
  headerSubtitle?: string;
  onCloseButtonClick?: (...args: unknown[]) => void;
  onClose?: (...args: unknown[]) => void;
  items: SupportMenuItemProps[];
}

export const SupportMenu = ({
  headerTitle,
  items,
  open,
  headerSubtitle,
  onClose,
  onCloseButtonClick,
}: SupportMenuProps) => {
  return (
    <Box sx={styles.root}>
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
          <Typography sx={styles.title}>{headerTitle}</Typography>
        </Box>
        <Box sx={styles.subtitleContainer}>
          <Typography sx={styles.subtitle}>{headerSubtitle}</Typography>
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
    height: "auto",
    fontSize: "1rem",
    minWidth: { xs: "21em" },
    position: "relative",
    display: "grid",
    gridTemplateRows: "minmax(0, 0.35fr) minmax(0, 0.65fr)",
  },

  content: {
    padding: "1.5em",
    gap: "0.75em",
    display: "grid",
    gridTemplateRows: "repeat(1, minmax(0, 1fr)",
  },

  header: {
    display: "flex",
    flexDirection: "column",
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
    bgcolor: "#fff",
  },
  title: {
    color: "#fff",
  },
  subtitle: {
    color: "#fff",
  },
});
