export const pixelToRem = (
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
