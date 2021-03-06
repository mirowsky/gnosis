/* eslint-disable @next/next/no-img-element */
import { Box, Button, SvgIconProps, Typography } from "@mui/material";
import { MotionBox } from "@workspace/components/shared";
import { useIntersectionObserver } from "@workspace/hooks";
import stylesheet from "@workspace/stylesheet";
import { AnimatePresence } from "framer-motion";
import React from "react";
import CourseCardSkeleton from "../CourseCardSkeleton/CourseCardSkeleton";
import { COURSE_CARD_TEST_ID } from "./constants";

type CardButton = {
  children: React.ReactNode | string;
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
  const { isIntersecting, ref } = useIntersectionObserver({ once: true });
  const [loading, setLoading] = React.useState(true);
  return (
    <Box ref={ref} sx={{ position: "relative" }}>
      <AnimatePresence initial={false}>
        {loading && (
          <MotionBox
            sx={{ position: "absolute" }}
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <CourseCardSkeleton />
          </MotionBox>
        )}
      </AnimatePresence>

      {isIntersecting && (
        <Box sx={styles.root}>
          <Box sx={styles.imageContainer}>
            <img
              onLoad={() => {
                setLoading(false);
              }}
              height={"220"}
              width={"320"}
              src={img.src}
              alt={img.alt}
              loading="lazy"
            />
          </Box>

          <Box sx={styles.infoContainer}>
            <Box sx={styles.titleContainer}>
              <Typography sx={styles.title} variant="h5" component="h6">
                {title}
              </Typography>
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
                      variant="body1"
                      color="grey.800"
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
              aria-label="Bot??o de direcionamento ?? p??gina deste curso"
              onClick={primaryAction.onClick}
              variant="contained"
              color="primary"
              sx={styles.primaryButton}
              size="small"
            >
              {(typeof primaryAction.children === "object" && (
                <Box
                  sx={styles.buttonNodeComponent}
                  component={
                    primaryAction.children as React.ComponentType<SvgIconProps>
                  }
                />
              )) ||
                primaryAction.children}
            </Button>

            <Button
              aria-label="Bot??o de direcionamento ao WhatsApp para falar com um representante sobre este curso"
              sx={styles.secondaryButton}
              variant="contained"
              color="primary"
              size="small"
              onClick={secondaryAction.onClick}
            >
              {(typeof secondaryAction.children === "object" && (
                <Box
                  sx={styles.buttonNodeComponent}
                  component={
                    secondaryAction.children as React.ComponentType<SvgIconProps>
                  }
                />
              )) ||
                secondaryAction.children}
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default CourseCard;

const styles = stylesheet.create({
  root: {
    width: { xs: "20rem", lg: "22rem" },
    minHeight: { xs: "30.875rem" },
    height: { xs: "auto" },
    backgroundColor: (theme) => theme.palette.background.paper,
    boxShadow: (theme) => theme.shadows[4],
    borderRadius: (theme) => theme.shape.borderRadius,
    display: "grid",
    gridTemplateRows: {
      xs: "minmax(0, 0.44fr) minmax(0, 0.36fr) minmax(0, 0.2fr)",
    },
    gridTemplateColumns: "100%",
  },

  //Container
  imageContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    overflow: "hidden",

    "& > img": {
      objectFit: "cover",
      width: "100%",
      height: "100%",
      objectPosition: "center",
      borderRadius: (theme) =>
        `${(theme.shape.borderRadius as number) * 4}px ${
          (theme.shape.borderRadius as number) * 4
        }px 0 0`,
    },
  },
  infoContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    px: (theme) => ({ xs: theme.spacing(4) }),
  },
  buttonContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: (theme) => ({ xs: theme.spacing(2) }),
  },
  tagsContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  titleContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  tagItemContainer: {
    width: "100%",
    height: "100%",
    display: "flex",
    gap: (theme) => theme.spacing(2),
    alignItems: "center",
  },

  //Item
  image: {
    objectFit: "cover",
    width: "100%",
    height: "100%",
    objectPosition: "center",
    borderRadius: (theme) =>
      `${(theme.shape.borderRadius as number) * 4}px ${
        (theme.shape.borderRadius as number) * 4
      }px 0 0`,
  },
  title: {
    fontWeight: 600,
    color: (theme) => theme.palette.primary.main,
  },
  tagLabel: {
    color: (theme) => theme.palette.grey[700],
  },
  tagIcon: {
    color: (theme) => theme.palette.grey[700],
  },
  primaryButton: {
    fontSize: "11px",
    padding: "1em 2.25em",
  },
  secondaryButton: {
    padding: "0.75em 5em",
    fontSize: "11px",
  },
  buttonNodeComponent: {},
});
