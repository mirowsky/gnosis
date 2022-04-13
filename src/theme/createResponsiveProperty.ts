import type { Properties } from "csstype";
import type { Theme, Breakpoint } from "@mui/system";

export type ResponsiveStyleValue<
  TType,
  TBreakpoint extends Breakpoint = Breakpoint
> = {
  [Key in TBreakpoint]?: TType | null;
};

export function createResponsiveStyle<TTheme extends Theme>(theme: TTheme) {
  return function <TCSSProperty extends keyof Properties>(
    property: TCSSProperty,
    values: ResponsiveStyleValue<
      Properties[TCSSProperty],
      TTheme["breakpoints"]["keys"][number]
    >
  ) {
    return Object.fromEntries(
      Object.keys(values).map((key, _index) => {
        return [
          `@media (min-width: ${
            theme.breakpoints.values[
              key as TTheme["breakpoints"]["keys"][number]
            ]
          }px)`,
          {
            [`${property}`]:
              values[key as TTheme["breakpoints"]["keys"][number]],
          },
        ];
      })
    );
  };
}
