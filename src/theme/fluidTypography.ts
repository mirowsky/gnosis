export type FluidTypographyParameters = {
  minFontSize: number;
  maxFontSize: number;
  minBreakpoint: number;
  maxBreakpoint: number;
  options?: {
    htmlFontSize: number;
  };
};

export const fluidTypography = ({
  minFontSize,
  maxBreakpoint,
  maxFontSize,
  minBreakpoint,
  options = { htmlFontSize: 16 },
}: FluidTypographyParameters) => {
  // m = (y2 - y1) / (x2 - x1)
  const slope = (maxFontSize - minFontSize) / (maxBreakpoint - minBreakpoint);

  // y(minFontSize) = m(slope) * x(minBreakpoint) + b
  // b = slope * minBreakpoint -minFontSize
  const yAxisIntercept = minFontSize - slope * minBreakpoint;

  // y(fluidValue) = m(slope) * x(vw) + b(yAxisIntercept)
  const fluidValue = `${toFixedIfDecimal(slope * 100)}vw + ${pixelToRem(
    yAxisIntercept,
    { htmlFontSize: options.htmlFontSize }
  )}`;
  const minFontSizeToRem = pixelToRem(minFontSize, {
    htmlFontSize: options.htmlFontSize,
  });
  const maxFontSizeToRem = pixelToRem(maxFontSize, {
    htmlFontSize: options.htmlFontSize,
  });

  return `clamp(${minFontSizeToRem}, ${fluidValue}, ${maxFontSizeToRem})`;
};

const pixelToRem = (
  pixelValue: number | string,
  options: { htmlFontSize: number } = { htmlFontSize: 16 }
) => {
  if (typeof pixelValue === "string") {
    return `${toFixedIfDecimal(
      parseFloat(pixelValue.split("px")[0]) / options.htmlFontSize
    )}rem`;
  } else {
    return `${toFixedIfDecimal(pixelValue / options.htmlFontSize)}rem`;
  }
};

const toFixedIfDecimal = (value: number) => {
  return value % 1 ? value.toFixed(2) : value;
};
