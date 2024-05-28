import couponConstants from "../data/coupon-constants.json";

/**
 *
 * @param {*} size
 */
export const getSizeConstants = (size) => {
  return size === "sm"
    ? couponConstants.sizeConstants.sm
    : size === "md"
      ? couponConstants.sizeConstants.md
      : couponConstants.sizeConstants.lg;
};
