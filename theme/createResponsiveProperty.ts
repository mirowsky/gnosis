import * as CSS from "csstype";
import type { Theme, Breakpoint } from "@mui/system";
import theme from "./theme";

export type ResponsiveStyleValue<
  TType,
  TBreakpoint extends Breakpoint = Breakpoint
> = {
  [Key in TBreakpoint]?: TType | null;
};

export function createResponsiveStyle<TTheme extends Theme = Theme>(
  theme: TTheme
) {
  return function <TCSSProperty extends keyof CSS.Properties>(
    property: TCSSProperty
  ) {
    return function (
      value: ResponsiveStyleValue<
        CSS.Properties[TCSSProperty],
        TTheme["breakpoints"]["keys"][number]
      >
    ) {
      return Object.fromEntries(
        Object.keys(value).map((key, _index) => {
          return [
            `@media (min-width: ${
              theme.breakpoints.values[
                key as TTheme["breakpoints"]["keys"][number]
              ]
            }px)`,
            {
              [`${property}`]:
                value[key as TTheme["breakpoints"]["keys"][number]],
            },
          ];
        })
      );
    };
  };
}

export const themeResponsiveStyles = createResponsiveStyle(theme);
