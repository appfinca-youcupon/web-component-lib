import { useMemo } from "react";
import { renderToString } from "react-dom/server";
import svgToMiniDataURI from "mini-svg-data-uri";
import dayjs from "dayjs";
import convert from "color-convert";
import CouponConstants from "./data/coupon-constants.json";

const EMAIL_TEMPLATE_PRODUCT_NAME =
  CouponConstants.emailCouponTemplate.productNameTemplate;
const EMAIL_TEMPLATE_PRICE = CouponConstants.emailCouponTemplate.priceTemplate;
const EMAIL_TEMPLATE_ORIGIN_PRICE =
  CouponConstants.emailCouponTemplate.originPriceTemplate;
const EMAIL_TEMPLATE_DISCOUNT =
  CouponConstants.emailCouponTemplate.discountTemplate;
const EMAIL_TEMPLATE_EXPIRATION =
  CouponConstants.emailCouponTemplate.expirationTemplate;

// SM: 190x50 (190~300)
const CONTENT_HEIGHT_SM = 50;
const IMAGE_WIDTH_SM = 50;
const CONTENT_WIDTH_SM = 75;
const DISCOUNT_WIDTH_SM = 65;
const CONTENT_WIDTH_SM_MIN = CONTENT_WIDTH_SM - 5;
const DISCOUNT_WIDTH_SM_MIN = DISCOUNT_WIDTH_SM - 10;
const MAX_PRICES_LENGTH_SM = 10;
const PADDING_SM = 2;

// MD: 320x85 (280~400)
const CONTENT_HEIGHT_MD = 85;
const IMAGE_WIDTH_MD = 85;
const CONTENT_WIDTH_MD = 125;
const DISCOUNT_WIDTH_MD = 110;
const CONTENT_WIDTH_MD_MIN = CONTENT_WIDTH_MD - 25;
const DISCOUNT_WIDTH_MD_MIN = DISCOUNT_WIDTH_MD - 20;
const MAX_PRICES_LENGTH_MD = 12;
const PADDING_MD = 4;

// LG: 400x120 (320~520)
const CONTENT_HEIGHT_LG = 120;
const IMAGE_WIDTH_LG = 120;
const CONTENT_WIDTH_LG = 150;
const DISCOUNT_WIDTH_LG = 130;
const CONTENT_WIDTH_LG_MIN = CONTENT_WIDTH_LG - 50;
const DISCOUNT_WIDTH_LG_MIN = DISCOUNT_WIDTH_LG - 45;
const MAX_PRICES_LENGTH_LG = 13;
const PADDING_LG = 12;

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

const getSizeVariables = (size) => {
  return size === "lg"
    ? {
        contentHeight: CONTENT_HEIGHT_LG,
        contentWidth: CONTENT_WIDTH_LG,
        imageWidth: IMAGE_WIDTH_LG,
        discountWidth: DISCOUNT_WIDTH_LG,
        padding: PADDING_LG,
        contentWidthMin: CONTENT_WIDTH_LG_MIN,
        discountWidthMin: DISCOUNT_WIDTH_LG_MIN,
      }
    : size === "md"
      ? {
          contentHeight: CONTENT_HEIGHT_MD,
          contentWidth: CONTENT_WIDTH_MD,
          imageWidth: IMAGE_WIDTH_MD,
          discountWidth: DISCOUNT_WIDTH_MD,
          padding: PADDING_MD,
          contentWidthMin: CONTENT_WIDTH_MD_MIN,
          discountWidthMin: DISCOUNT_WIDTH_MD_MIN,
        }
      : {
          contentHeight: CONTENT_HEIGHT_SM,
          contentWidth: CONTENT_WIDTH_SM,
          imageWidth: IMAGE_WIDTH_SM,
          discountWidth: DISCOUNT_WIDTH_SM,
          padding: PADDING_SM,
          contentWidthMin: CONTENT_WIDTH_SM_MIN,
          discountWidthMin: DISCOUNT_WIDTH_SM_MIN,
        };
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
      return getSizeVariables(size);
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
export const StampDiv = ({ size, shop = "MyShop" }) => {
  return size == "lg" ? (
    <div
      style={{
        position: "absolute",
        left: "8px",
        bottom: "2px",
        fontSize: "10px",
        padding: "2px",
        backgroundColor: "transparent",
        color: "#878787",
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
  const { size, productName, originPrice, price, template } = props;
  const { contentHeight, contentWidthMin } = useMemo(() => {
    return getSizeVariables(size);
  }, [size]);

  const priceFormatted = useMemo(() => {
    return `${DOLLAR_SIGN}${price}`;
  }, [price]);

  const originPriceFormatted = useMemo(() => {
    return `${DOLLAR_SIGN}${originPrice}`;
  }, [originPrice]);

  const isPriceSimplified = useMemo(() => {
    const maxLength =
      size === "lg"
        ? MAX_PRICES_LENGTH_LG
        : size === "md"
          ? MAX_PRICES_LENGTH_MD
          : MAX_PRICES_LENGTH_SM;
    return (
      (priceFormatted?.length ?? 0) + (originPriceFormatted?.length ?? 0) >
      maxLength
    );
  }, [priceFormatted, originPriceFormatted]);

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
            }}
          >
            {isPriceSimplified ? (
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
}) => {
  const { contentHeight, discountWidthMin } = useMemo(() => {
    return getSizeVariables(size);
  }, [size]);

  const formattedDiscount = useMemo(() => {
    return `${discountValue}${discountType === "percentage" ? "%" : DOLLAR_SIGN}`;
  }, [discountType, discountValue]);

  const formattedExpiration = useMemo(() => {
    return dayjs(expirationTimestamp).format("MMM DD, YYYY");
  }, [expirationTimestamp]);

  const isLightColor = useMemo(() => {
    let hslColor = convert.hex.hsl(color);
    if (hslColor) {
      return hslColor[2] > 55 || false;
    }
    return false;
  }, [color]);

  const infoTextColor = useMemo(() => {
    let c = "white";
    if (isLightColor) {
      let hslColor = convert.hex.hsl(color);
      hslColor[2] = hslColor[2] - 50;
      c = "#" + convert.hsl.hex(hslColor);
    }
    return c;
  }, [isLightColor]);

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
              gap: "4px",
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
          <span style={{ fontSize: "0.75em" }}>
            {template ? EMAIL_TEMPLATE_EXPIRATION : formattedExpiration}
          </span>
        </div>
      </div>
    </div>
  );
};
