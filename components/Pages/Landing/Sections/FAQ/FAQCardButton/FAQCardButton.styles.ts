import stylesheet from "@workspace/stylesheet";
import { Console } from "console";
import { FAQCardButtonProps } from "./FAQCardButton";

const invert = (bool: boolean) => (bool ? "main" : "contrastText");

export const FAQCardButtonStyles = (
  open: boolean = false,
  fontSize: FAQCardButtonProps["fontSize"] = { xs: "1rem" },
  inverted: boolean = false,
  color: "primary" | "secondary" = "primary"
) => {
  const INVERT = invert(!inverted);
  const REVERSE_INVERT = invert(inverted);

  console.log(INVERT, REVERSE_INVERT);

  return stylesheet.create({
    root: {
      cursor: "pointer",
      borderRadius: "6px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: { xs: "3em" },
      width: { xs: "4em" },
      transition: "background-color 0.25s ease",
      fontSize: fontSize,
      bgcolor: (theme) =>
        open
          ? theme.palette[color][INVERT]
          : theme.palette[color][REVERSE_INVERT],

      "& > svg": {
        color: (theme) =>
          open
            ? theme.palette[color][REVERSE_INVERT]
            : theme.palette[color][INVERT],
      },

      "&:hover": {
        bgcolor: (theme) =>
          open
            ? theme.palette[color][REVERSE_INVERT]
            : theme.palette[color][INVERT],

        "& > svg": {
          color: (theme) =>
            open
              ? theme.palette[color][INVERT]
              : theme.palette[color][REVERSE_INVERT],
        },
      },
    },
    chevron: {
      fontSize: "2em",
      pointerEvents: "none",
    },
  });
};
