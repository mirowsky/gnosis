import { Box, Button, ButtonProps, Typography } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import { ThemeStyles } from "@workspace/types";
import React from "react";
import FAQCard, { FAQCardProps } from "../../components/FAQCard/FAQCard";

export type FAQSectionProps = {
  items: FAQCardProps[];
  sectionTitle?: string;
  LoadMoreButtonProps?: ButtonProps;
  sx?: ThemeStyles;
  id?: string;
};

export const FAQSection = ({
  items = [],
  sx,
  sectionTitle = "Encontre as respostas que você precisa em nosso centro de ajuda",
  LoadMoreButtonProps = { children: "Mais perguntas", onClick: () => {} },
  id,
}: FAQSectionProps) => {
  return items.length > 0 ? (
    <Box id={id} sx={{ ...styles.root, ...sx }}>
      <Box sx={styles.titleContainer}>
        <Typography variant="h2" sx={styles.title}>
          {sectionTitle}
        </Typography>
      </Box>

      <Box sx={styles.cardsContainer}>
        {items.map((item, index) => {
          return <FAQCard {...item} key={index} />;
        })}
      </Box>

      <Box sx={styles.loadMoreButtonContainer}>
        <Button {...LoadMoreButtonProps} variant="outlined" color="primary" />
      </Box>
    </Box>
  ) : null;
};

export default FAQSection;

const styles = stylesheet.create({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    gap: (theme) => ({ xs: theme.spacing(8), md: theme.spacing(10) }),
  },
  titleContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
  },
  cardsContainer: {
    gap: (theme) => ({ xs: theme.spacing(5), sm: theme.spacing(3) }),
    rowGap: (theme) => ({ lg: theme.spacing(8) }),
    display: "grid",
    justifyItems: "center",
    gridTemplateColumns: {
      xs: "repeat(1, minmax(0, 1fr))",
      sm: "repeat(2, minmax(0, 1fr))",
      xl: "repeat(3, minmax(0, 1fr))",
    },
  },
  loadMoreButtonContainer: {
    display: "flex",
    justifyContent: "center",
  },

  title: {
    fontWeight: 700,
    color: (theme) => theme.palette.primary.main,
    maxWidth: "22ch",
  },
  loadMoreButton: {},
});
