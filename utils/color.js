import convert from "color-convert";

export const getIsLightColor = (color) => {
  let hslColor = convert.hex.hsl(color);
  if (hslColor) {
    return hslColor[2] > 55 || false;
  }
  return false;
};
