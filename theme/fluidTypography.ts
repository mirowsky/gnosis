import {} from "@mui/system";

export const fluidTypography = (
  maxFontSize: number,
  minFontSize: number,
  minBreakpoint: number,
  maxBreakpoint: number,
  htmlFontSize: number = 16
) => {
  // slope => m = y2 - y2 / x2 - x1
  const slope = (maxFontSize - minFontSize) / (maxBreakpoint - minBreakpoint);

  // y = mx + b => this is b
  const yAxisIntercept = minFontSize - slope * minBreakpoint;

  const fluidValue = `${slope * 100}vw + ${pixelValueToRem(yAxisIntercept)}rem`;

  const cssFluidValue = `clamp(${pixelValueToRem(
    minFontSize
  )}rem, ${fluidValue}, ${pixelValueToRem(maxFontSize)}rem) `;

  return cssFluidValue;
};

const pixelStringToRem = (pixelStringValue: string, htmlFontSize = 16) => {
  return parseFloat(pixelStringValue.split("px")[0]);
};

const pixelValueToRem = (pixelValue: number, htmlFontSize = 16) => {
  return pixelValue / htmlFontSize;
};
