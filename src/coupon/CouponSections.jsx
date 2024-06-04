import { useMemo } from "react";
import { renderToString } from "react-dom/server";
import svgToMiniDataURI from "mini-svg-data-uri";
import dayjs from "dayjs";
import convert from "color-convert";
import CouponConstants from "./data/coupon-constants.json";
import { getSizeConstants } from "./utils/size";

const EMAIL_TEMPLATE_PRODUCT_NAME =
  CouponConstants.emailCouponTemplate.productNameTemplate;
const EMAIL_TEMPLATE_PRICE = CouponConstants.emailCouponTemplate.priceTemplate;
const EMAIL_TEMPLATE_ORIGIN_PRICE =
  CouponConstants.emailCouponTemplate.originPriceTemplate;
const EMAIL_TEMPLATE_DISCOUNT =
  CouponConstants.emailCouponTemplate.discountTemplate;
const EMAIL_TEMPLATE_EXPIRATION =
  CouponConstants.emailCouponTemplate.expirationTemplate;

// TODO: different currency
const DOLLAR_SIGN = "$";

const couponProductInfoContainerStyle = {
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  paddingLeft: "8px",
  paddingRight: "8px",
  //   gradient
  //   background:
  //     "linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgb(255, 255, 255) 10%)",
  //   paddingLeft: "24px",
  //   marginLeft: "-16px",
};

const couponProductNameSpanStyle = {
  width: "100%",
  textAlign: "left",
  gap: "2px",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "normal",
  display: "-webkit-box",
  WebkitLineClamp: 3,
  WebkitBoxOrient: "vertical", //TODO: deprecated
};

const couponProductNameSpanStyles = {
  lg: {
    ...couponProductNameSpanStyle,
    WebkitLineClamp: 3,
  },
  md: {
    ...couponProductNameSpanStyle,
    WebkitLineClamp: 3,
  },
  sm: {
    ...couponProductNameSpanStyle,
    WebkitLineClamp: 2,
  },
};

const couponDiscountInfoContainerStyle = {
  //   width: "150px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  color: "white",
  gap: "2px",
  paddingRight: "8px",
  paddingLeft: "4px",
};

const getIsLightColor = (color) => {
  let hslColor = convert.hex.hsl(color);
  if (hslColor) {
    return hslColor[2] > 55 || false;
  }
  return false;
};

const getInfoTextColor = (color) => {
  let isLightColor = getIsLightColor(color);
  let c = "white";
  if (isLightColor) {
    let hslColor = convert.hex.hsl(color);
    hslColor[2] = hslColor[2] - 50;
    c = "#" + convert.hsl.hex(hslColor);
  }
  return c;
};

/**
 * @param {{
 *  size: ("sm"|"md"|"lg")
 *  imgUrl: string
 *  template: boolean
 * }} props
 */
export const CouponImage = ({ size, imgUrl }) => {
  const { contentHeight, contentWidth, imageWidth, discountWidth, padding } =
    useMemo(() => {
      return getSizeConstants(size);
    }, [size]);

  return (
    <div
      style={{
        // width: imageWidth,
        // minWidth: imageWidth,
        // height: contentHeight,
        maxWidth: imageWidth - padding * 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingLeft: `${0}px`,
        paddingTop: `${0}px`,
        margin: "8px 0 8px 8px",
      }}
    >
      <img
        src={imgUrl}
        style={{
          // scale to fit
          // maxWidth: imageWidth,
          // maxHeight: contentHeight,
          // scale to fill
          // width: imageWidth - padding * 2,
          // height: contentHeight - padding * 2,
          width: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

// TODO
export const StampDiv = ({ size, shop = "MyShop", layout, color }) => {
  const isLightColor = useMemo(() => {
    return getIsLightColor(color);
  }, [color]);

  const infoTextColor = useMemo(() => {
    getInfoTextColor(color);
  }, [color]);

  let colorType = layout % 10;
  let posType =
    Math.floor(layout / 10) === 1
      ? "topLeft"
      : Math.floor(layout / 10) === 2
        ? "topLeft"
        : Math.floor(layout / 10) === 3
          ? "bottomRight"
          : Math.floor(layout / 10) === 4
            ? "bottomRight"
            : "topLeft";

  return size == "lg" ? (
    <div
      style={{
        whiteSpace: "nowrap",
        position: "absolute",
        left: posType == "topLeft" ? "8px" : "auto",
        top: posType == "topLeft" ? "0px" : "auto",
        right: posType == "bottomRight" ? "8px" : "auto",
        bottom: posType == "bottomRight" ? "0px" : "auto",
        fontSize: "10px",
        padding: "2px",
        backgroundColor: "transparent",
        // color: "#878787",
        color:
          colorType == 1
            ? color
            : colorType == 2
              ? isLightColor
                ? infoTextColor
                : color
              : "#878787",
        zIndex: 1,
      }}
    >
      <span>{`${shop} • YouCupon`}</span>
    </div>
  ) : (
    <></>
  );
};

/**
 * @param {{
 *  size: ("sm"|"md"|"lg")
 *  productName: string
 *  price: number
 *  originPrice: number
 *  template: boolean
 * }} props
 */
export const CouponProductSection = (props) => {
  const { size, productName, originPrice, price, template, layout } = props;
  const { contentHeight, contentWidthMin, priceLengthMax } = useMemo(() => {
    return getSizeConstants(size);
  }, [size]);

  const priceFormatted = useMemo(() => {
    return `${DOLLAR_SIGN}${price}`;
  }, [price]);

  const originPriceFormatted = useMemo(() => {
    return `${DOLLAR_SIGN}${originPrice}`;
  }, [originPrice]);

  const isPriceSimplified = useMemo(() => {
    const maxLength = priceLengthMax;
    return (
      (priceFormatted?.length ?? 0) + (originPriceFormatted?.length ?? 0) >
      maxLength
    );
  }, [priceFormatted, originPriceFormatted]);

  const bottomMargin = Math.floor(layout / 30) > 0;

  return (
    <div
      //   className={styles["coupon-product-info-container-gradient"]}
      style={{
        ...couponProductInfoContainerStyle,
        // width: contentWidth,
        minWidth: contentWidthMin,
      }}
    >
      <div className="stack-col stack-ax-center ax-center">
        <div className="h-auto my-0 ax-left">
          <div
            //   className={styles["coupon-product-name-span-" + size]}
            style={{
              ...couponProductNameSpanStyles[size],
            }}
          >
            {template ? EMAIL_TEMPLATE_PRODUCT_NAME : productName}
          </div>
          <div
            className="stack-row gap-2"
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              gap: "4px",
              fontWeight: "500",
              alignItems: "center",
              marginTop: "2px",
              marginBottom: bottomMargin ? "12px" : 0,
            }}
          >
            {isPriceSimplified && !template ? (
              <></>
            ) : (
              <span style={{ textDecoration: "line-through", color: "gray" }}>
                {template ? EMAIL_TEMPLATE_ORIGIN_PRICE : originPriceFormatted}
              </span>
            )}
            <span>{template ? EMAIL_TEMPLATE_PRICE : priceFormatted}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * @param {{
 *  size: ("sm"|"md"|"lg")
 *  color: string
 *  discountValue: number
 *  discountType: ("value"|"percentage")
 *  expirationTimestamp: number
 *  template: boolean
 * }} props
 */
export const CouponDiscountSection = ({
  size,
  color,
  discountValue,
  discountType,
  expirationTimestamp,
  template,
  layout,
}) => {
  const { contentHeight, discountWidthMin } = useMemo(() => {
    return getSizeConstants(size);
  }, [size]);

  const formattedDiscount = useMemo(() => {
    return `${discountValue}${discountType === "percentage" ? "%" : DOLLAR_SIGN}`;
  }, [discountType, discountValue]);

  const formattedExpiration = useMemo(() => {
    return dayjs(expirationTimestamp).format("MMM DD, YYYY");
    // return dayjs(expirationTimestamp).format("YYYY-MM-DD");
    // return `Until ${dayjs(expirationTimestamp).format("MMM DD")}`;
  }, [expirationTimestamp]);

  const isLightColor = useMemo(() => {
    return getIsLightColor(color);
  }, [color]);

  const infoTextColor = useMemo(() => {
    return getInfoTextColor(color);
  }, [color]);

  const bottomRight = layout % 20 >= 10;

  return (
    <div
      //   className={`${styles["coupon-discount-info-container"]}`}
      style={{
        ...couponDiscountInfoContainerStyle,
        // width: discountWidth,
        minWidth: discountWidthMin,
        height: contentHeight,
        // background: color,
        color: infoTextColor,
      }}
    >
      <div className="stack-col stack-ax-center ax-center">
        <div className="h-auto my-0 ax-center">
          <div
            style={{
              // width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "baseline",
              flexDirection: "row",
              flexWrap: "wrap",
              gap: "4px",
              margin: "4px",
              // fontWeight: "500",
            }}
          >
            <span style={{ fontSize: "1.25em" }}>
              <strong>
                {template ? EMAIL_TEMPLATE_DISCOUNT : formattedDiscount}
              </strong>
            </span>
            <span style={{ fontSize: "0.75em" }}>OFF</span>
          </div>
          <span
            style={{
              fontSize: "0.75em",
              position: bottomRight ? "absolute" : "relative",
              display: bottomRight ? "block" : "flex",
              bottom: bottomRight ? "4px" : "auto",
              right: bottomRight ? "12px" : "auto",
            }}
          >
            {template ? EMAIL_TEMPLATE_EXPIRATION : formattedExpiration}
          </span>
        </div>
      </div>
    </div>
  );
};
