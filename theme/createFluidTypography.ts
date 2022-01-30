import { fluidTypography, FluidTypographyParameters } from "./fluidTypography";

export const createFluidTypography = (
  maxBreakpoint: number,
  minBreakpoint: number,
  options?: FluidTypographyParameters["options"]
) => {
  return (
    params: Pick<FluidTypographyParameters, "minFontSize" | "maxFontSize">
  ) =>
    fluidTypography({
      ...params,
      options: options,
      maxBreakpoint: maxBreakpoint,
      minBreakpoint: minBreakpoint,
    });
};
