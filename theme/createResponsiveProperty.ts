import { CoreBreakpoints as Breakpoint } from "./breakpoints";
import * as CSS from "csstype";

export type ResponsiveStyleValue<
  TType,
  TBreakpoint extends Breakpoint = Breakpoint
> = {
  [Key in keyof TBreakpoint]?: TType | null;
};

export function createResponsiveStyle<
  TBreakpoint extends Breakpoint = Breakpoint
>(breakpoints: TBreakpoint) {
  return function <TCSSProperty extends keyof CSS.Properties>(
    property: TCSSProperty
  ) {
    return function (
      value: ResponsiveStyleValue<CSS.Properties[TCSSProperty], TBreakpoint>
    ) {
      const output = {};

      for (const key in value) {
        Object.assign(output, {
          [`@media (min-width: ${breakpoints[key as keyof TBreakpoint]}px)`]: {
            [`${`${property}`}`]: value[key],
          },
        });
      }

      return output;
    };
  };
}
