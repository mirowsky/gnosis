import { Breakpoint, Theme } from "@mui/material";
import { Head } from "@workspace/types";
import { fluidTypography } from "./fluidTypography";
import theme from "./theme";

export const createFluidTypography = <
  TBreakpoint extends Breakpoint = Breakpoint
>(
  theme: Theme
) => {
  return (minBreakpoint: TBreakpoint, maxBreakpoint: TBreakpoint) => {
    return (
      params: Omit<
        Head<typeof fluidTypography>,
        "maxBreakpoint" | "minBreakpoint" | "options"
      >
    ) => {
      return fluidTypography({
        ...params,
        maxBreakpoint: theme.breakpoints.values[maxBreakpoint],
        minBreakpoint: theme.breakpoints.values[minBreakpoint],
        options: {
          htmlFontSize: theme.typography.htmlFontSize,
        },
      });
    };
  };
};

export const themeFluidTypography = createFluidTypography(theme)("xs", "lg");
