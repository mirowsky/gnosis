import { Box, Button, ButtonProps, Typography } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import { ThemeStyles } from "@workspace/types";
import React from "react";
import BlogPreviewCard, {
  BlogPreviewCardProps,
} from "../../components/BlogPreviewCard/BlogPreviewCard";

export type BlogSectionProps = {
  ButtonProps?: ButtonProps;
  items: BlogPreviewCardProps[];
  sectionTitle: string;
  sx?: ThemeStyles;
  id?: string;
};

export const BlogSection = ({
  ButtonProps,
  items = [],
  sectionTitle = "Confira nossas últimas postagens",
  sx,
  id,
}: BlogSectionProps) => {
  return items.length > 0 ? (
    <Box id={id} sx={{ ...styles.root, ...sx }}>
      <Box sx={styles.titleContainer}>
        <Typography color="primary" variant="h2" sx={styles.title}>
          {sectionTitle}
        </Typography>
      </Box>

      <Box sx={styles.grid}>
        {items.map((item, index) => {
          return <BlogPreviewCard {...item} key={index} />;
        })}
      </Box>

      <Box sx={styles.buttonContainer}>
        <Button {...ButtonProps} variant="outlined" color="primary" />
      </Box>
    </Box>
  ) : null;
};

const styles = stylesheet.create({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    gap: (theme) => ({ xs: theme.spacing(8) }),
  },
  grid: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: {
      xs: "minmax(0, 1fr)",
      lg: "repeat(2, minmax(0, 0.5fr))",
      xl: "repeat(3, minmax(0, 0.333fr))",
    },
    justifyItems: "center",
    gap: (theme) => ({ xs: theme.spacing(4) }),
    rowGap: (theme) => ({ xs: theme.spacing(6) }),
  },

  titleContainer: {
    width: "100%",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    width: "100%",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
  },
  button: {},
  title: {
    fontWeight: 700,
  },
});
