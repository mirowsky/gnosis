import stylesheet from "src/theme/stylesheet";
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

  return stylesheet.create({
    root: {
      userSelect: "none",
      cursor: "pointer",
      borderRadius: "6px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      pointeEvents: "auto",
      height: { xs: "3em" },
      width: { xs: "4em" },
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
    },
    chevron: {
      fontSize: "2em",
      pointerEvents: "none",
    },
  });
};
