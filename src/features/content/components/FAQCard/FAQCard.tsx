import { Box, Typography } from "@mui/material";
import { MotionBox } from "@workspace/components/shared";
import stylesheet from "@workspace/stylesheet";
import React from "react";
import FAQCardButton from "../FAQCardButton/FAQCardButton";

export type FAQCardProps = {
  open?: boolean;
  onClick?: (...args: unknown[]) => void;
  question: string;
  answer: string;
};

export const FAQCard = ({
  onClick,
  open = false,
  question = "Lorem ipsum dolum sanet orum",
  answer = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, eum ut debitis doloribus totam tempore!",
}: FAQCardProps) => {
  const styles = React.useMemo(() => _styles(open), [open]);

  return (
    <Box onClick={onClick} sx={styles.root}>
      <Box sx={styles.textContainer}>
        <Typography sx={styles.text} variant="h6">
          {question}
        </Typography>
      </Box>

      <MotionBox
        initial="closed"
        animate={open ? "open" : "closed"}
        variants={{
          open: {
            maxHeight: "500px",
            opacity: 1,
          },
          closed: {
            maxHeight: "0px",
            opacity: 0,
          },
        }}
        transition={{
          type: "spring",
          mass: 1,
          stiffness: 280,
          damping: 60,
        }}
        sx={styles.answerContainer}
      >
        <Typography sx={styles.answer} variant="body2">
          {answer}
        </Typography>
      </MotionBox>

      <Box sx={styles.buttonContainer}>
        <Box sx={styles.button}>
          <FAQCardButton onClick={onClick} open={open} inverted />
        </Box>
      </Box>
    </Box>
  );
};

export default FAQCard;

const _styles = (open: boolean) =>
  stylesheet.create({
    root: {
      cursor: "pointer",
      fontSize: "1rem",
      minWidth: { lg: "21.875em", xs: "18.75em" },
      width: "auto",
      height: "fit-content",
      borderRadius: (theme) => theme.shape.borderRadius,
      position: "relative",
      boxShadow: (theme) => theme.shadows[3],
      display: "flex",
      flexDirection: "column",
      transition: "background-color 0.2s linear, color 0.2s linear",
      backgroundColor: (theme) =>
        open ? theme.palette.primary.main : theme.palette.primary.contrastText,
    },

    answerContainer: {
      overflow: "hidden",
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
    },

    answer: {
      color: (theme) =>
        open ? theme.palette.primary.contrastText : theme.palette.primary.main,
      maxWidth: "22ch",
      padding: "1em",
    },

    buttonContainer: {
      position: "relative",
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
      zIndex: 25,
    },

    button: {
      position: "relative",
      transform: "translateY(25%)",
    },

    textContainer: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
      p: 3,
      pb: 1.5,
    },
    text: {
      fontWeight: 600,
      maxWidth: "17ch",
      color: (theme) =>
        open ? theme.palette.primary.contrastText : theme.palette.primary.main,
    },
  });
