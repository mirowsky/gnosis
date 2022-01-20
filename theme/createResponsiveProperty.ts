import { CoreBreakpoints as Breakpoint } from "./breakpoints";
import * as CSS from "csstype";
import { TypeOf } from "yup";

export type ResponsiveStyleValue<
  TType,
  TBreakpoint extends Breakpoint = Breakpoint
> = {
  [Key in keyof TBreakpoint]?: TType | null;
};

export const createResponsiveCSSProperty = <
  TBreakpoint extends Breakpoint = Breakpoint
>(
  breakpoints: TBreakpoint,
  style: {
    property: keyof CSS.Properties;
    value: ResponsiveStyleValue<keyof CSS.Properties, TBreakpoint>;
  }
) => {
  const output = {};

  for (const key in style.value) {
    const value = style.value[key];

    Object.assign(output, {
      [`@media (min-width: ${breakpoints[key as keyof TBreakpoint]}px)`]: {
        [`${`${style.property}`}`]: value,
      },
    });
  }

  return output;
};

type CSSTypeGeneric<T extends keyof CSS.Properties> = CSS.PropertyValue<
  CSS.Properties[T]
>;

const me: CSSTypeGeneric<"objectFit"> = "cover";

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
