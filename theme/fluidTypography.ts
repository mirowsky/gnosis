type FluidTypographyParameters = {
  minFontSize: number;
  maxFontSize: number;
  minBreakpoint: number;
  maxBreakpoint: number;
  options: {
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
  // slope => m = y2 - y2 / x2 - x1
  const slope = (maxFontSize - minFontSize) / (maxBreakpoint - minBreakpoint);

  // y = mx + b => this is b
  const yAxisIntercept = minFontSize - slope * minBreakpoint;

  // convert to rem units
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

  return `clamp(${minFontSizeToRem}, ${fluidValue}, ${maxFontSizeToRem}) `;
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
