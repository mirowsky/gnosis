import { Box, Button, Typography } from "@mui/material";
import stylesheet from "@workspace/stylesheet";
import React from "react";
import { COURSE_CARD_TEST_ID } from "./constants";

type CardButton = {
  children: React.ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

type CardTag<TType extends {} = {}> = {
  label: string;
  icon: React.ComponentType<TType>;
};

export type CourseCardProps = {
  primaryAction: CardButton;
  secondaryAction: CardButton;
  title: string;
  tags: CardTag[];
  img: {
    src: string;
    alt: string;
  };
};

const CourseCard = ({
  img,
  primaryAction,
  secondaryAction,
  tags,
  title,
}: CourseCardProps) => {
  return (
    <Box sx={styles.root}>
      <Box sx={styles.grid}>
        <Box sx={styles.imageContainer}>
          <Box sx={styles.image} component="img" src={img.src} alt={img.alt} />
        </Box>

        <Box sx={styles.infoContainer}>
          <Box sx={styles.titleContainer}>
            <Typography variant="h4"> {title}</Typography>
          </Box>

          <Box
            data-testid={COURSE_CARD_TEST_ID.TAG_CONTAINER}
            sx={styles.tagsContainer}
          >
            {tags.map(({ icon: Icon, label }, index) => {
              return (
                <Box sx={styles.tagItemContainer} key={index}>
                  <Box sx={styles.tagIcon} component={Icon} />
                  <Typography
                    sx={styles.tagLabel}
                    variant="h6"
                    color="grey.700"
                    component="sub"
                  >
                    {label}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>

        <Box
          data-testid={COURSE_CARD_TEST_ID.BUTTON_CONTAINER}
          sx={styles.buttonContainer}
        >
          <Button
            onClick={primaryAction.onClick}
            variant="contained"
            color="primary"
          >
            {primaryAction.children}
          </Button>

          <Button
            variant="contained"
            color="primary"
            onClick={secondaryAction.onClick}
          >
            {secondaryAction.children}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CourseCard;

const styles = stylesheet.create({
  root: {
    width: { xs: "18.125rem", lg: "21.875rem" },
    height: { xs: "21.875rem", lg: "25.875rem" },
    backgroundColor: (theme) => theme.palette.background.paper,
    boxShadow: (theme) => theme.shadows[4],
    display: "block",
  },
  grid: {
    display: "grid",
    gridTemplateRows: {
      xs: "minmax(0, 0.44fr) minmax(0, 0.36fr) minmax(0, 0.2fr)",
    },
    gridTemplateColumns: "1fr",
    height: "100%",
    width: "100%",
  },

  //Container
  imageContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
  infoContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
  buttonContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
  tagsContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
  titleContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
  tagItemContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
  },

  //Item
  image: {},
  title: {},
  tagLabel: {},
  tagIcon: {},
  primaryButton: {},
  secondaryButton: {},
});
