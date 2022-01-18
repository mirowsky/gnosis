import { CoreBreakpoints as Breakpoint } from "./breakpoints";

export type ResponsiveStyleValue<
  TType,
  TBreakpoint extends Breakpoint = Breakpoint
> = {
  [Key in keyof TBreakpoint]?: TType | null;
};

export const createResponsiveCSSProperty = <
  CSSPropertyType,
  TBreakpoint extends Breakpoint = Breakpoint
>(
  breakpoints: TBreakpoint,
  styleValue: ResponsiveStyleValue<CSSPropertyType, TBreakpoint>
) => {
  const output = {};

  for (const key in styleValue) {
    const value = styleValue[key];

    Object.assign(output, {
      [`@media (min-width: ${breakpoints[key as keyof TBreakpoint]}px)`]: {
        value,
      },
    });
  }

  return output;
};
