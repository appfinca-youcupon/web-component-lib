import dayjs from "dayjs";
import { useMemo } from "react";
import convert from "color-convert";

// SM: 190x50
const CONTENT_HEIGHT_SM = 50;
const IMAGE_WIDTH_SM = 50;
const CONTENT_WIDTH_SM = 75;
const DISCOUNT_WIDTH_SM = 65;
const MAX_PRICES_LENGTH_SM = 10;

// MD: 320x85
const CONTENT_HEIGHT_MD = 85;
const IMAGE_WIDTH_MD = 85;
const CONTENT_WIDTH_MD = 125;
const DISCOUNT_WIDTH_MD = 110;
const MAX_PRICES_LENGTH_MD = 12;

// LG: 400x120
const CONTENT_HEIGHT_LG = 120;
const IMAGE_WIDTH_LG = 120;
const CONTENT_WIDTH_LG = 150;
const DISCOUNT_WIDTH_LG = 130;
const MAX_PRICES_LENGTH_LG = 13;

// TODO: remove after confirmed
const USE_GRADIENT = true;

const couponContentContainerStyle = {
  width: "100%",
  height: "100%",
  position: "absolute",
  top: 0,
};

const couponShadowStyle = {
  filter: "drop-shadow(0px 10px 5px rgba(0, 0, 0, 0.1))",
};

const couponProductInfoContainerStyle = {
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  backgroundColor: "white",
  paddingLeft: "8px",
};

const couponProductInfoContainerGradientStyle = {
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  paddingLeft: "8px",
  paddingRight: "8px",
};

const couponDiscountInfoContainer = {
  width: "150px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  color: "white",
  gap: "2px",
  paddingLeft: "4px",
  paddingRight: "8px",
};

const couponContentLgStyle = {
  backgroundColor: "white",
  clipPath:
    "path('M240.34 0H248.399H256.458H400V2C397.791 2 396 3.79086 396 6C396 8.20914 397.791 10 400 10V14C397.791 14 396 15.7909 396 18C396 20.2091 397.791 22 400 22V26C397.791 26 396 27.7909 396 30C396 32.2091 397.791 34 400 34V38C397.791 38 396 39.7909 396 42C396 44.2091 397.791 46 400 46V50C397.791 50 396 51.7909 396 54C396 56.2091 397.791 58 400 58V62C397.791 62 396 63.7909 396 66C396 68.2091 397.791 70 400 70V74C397.791 74 396 75.7909 396 78C396 80.2091 397.791 82 400 82V86C397.791 86 396 87.7909 396 90C396 92.2091 397.791 94 400 94V98C397.791 98 396 99.7909 396 102C396 104.209 397.791 106 400 106V110C397.791 110 396 111.791 396 114C396 116.209 397.791 118 400 118V120H256.458H248.399H240.34H0V118C2.20914 118 4 116.209 4 114C4 111.791 2.20914 110 0 110V106C2.20914 106 4 104.209 4 102C4 99.7909 2.20914 98 0 98V94C2.20914 94 4 92.2091 4 90C4 87.7909 2.20914 86 0 86V82C2.20914 82 4 80.2091 4 78C4 75.7909 2.20914 74 0 74V70C2.20914 70 4 68.2091 4 66C4 63.7909 2.20914 62 0 62V58C2.20914 58 4 56.2091 4 54C4 51.7909 2.20914 50 0 50V46C2.20914 46 4 44.2091 4 42C4 39.7909 2.20914 38 0 38V34C2.20914 34 4 32.2091 4 30C4 27.7909 2.20914 26 0 26V22C2.20914 22 4 20.2091 4 18C4 15.7909 2.20914 14 0 14V10C2.20914 10 4 8.20914 4 6C4 3.79086 2.20914 2 0 2V0H240.34Z')",
};

const couponProductNameSpanLgStyle = {
  width: "100%",
  textAlign: "left",
  gap: "2px",
  // -webkit-box-orient: "vertical",
  // display: -webkit-box;
  // -webkit-line-clamp: 3;
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "normal",
};

/**
 * @param {{
 *    imgUrl: string,
 *    productName: string,
 *    price: number,
 *    originPrice: number,
 *    expirationTimestamp: number,
 *    discountValue: number,
 *    discountType: ("value"|"percentage")
 *    color: string
 *    url: string
 *    outline: boolean
 *    shadow: boolean
 *    size: ("sm"|"md"|"lg")
 * }} props
 */
export default function CouponContentInline(props) {
  let {
    imgUrl,
    productName,
    price,
    originPrice,
    color,
    discountType = "percentage",
    discountValue = 5,
    expirationTimestamp = 0,
    size = "md",
    shadow,
    url,
    stampPos = 0,
    stampType = 0,
    stampSize = 0,
    stampBorder = 0,
  } = props;

  const clickable = useMemo(() => {
    try {
      url = new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  }, [url]);

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

  //  TODO: currency?
  const priceFormatted = useMemo(() => {
    return `$${price}`;
  }, [price]);

  const originPriceFormatted = useMemo(() => {
    return `$${originPrice}`;
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

  const formattedExpiration = useMemo(() => {
    return dayjs(expirationTimestamp).format("MMM DD, YYYY");
  }, [expirationTimestamp]);

  const { contentHeight, contentWidth, imageWidth, discountWidth } =
    useMemo(() => {
      return size === "lg"
        ? {
            contentHeight: CONTENT_HEIGHT_LG,
            contentWidth: CONTENT_WIDTH_LG,
            imageWidth: IMAGE_WIDTH_LG,
            discountWidth: DISCOUNT_WIDTH_LG,
          }
        : size === "md"
        ? {
            contentHeight: CONTENT_HEIGHT_MD,
            contentWidth: CONTENT_WIDTH_MD,
            imageWidth: IMAGE_WIDTH_MD,
            discountWidth: DISCOUNT_WIDTH_MD,
          }
        : {
            contentHeight: CONTENT_HEIGHT_SM,
            contentWidth: CONTENT_WIDTH_SM,
            imageWidth: IMAGE_WIDTH_SM,
            discountWidth: DISCOUNT_WIDTH_SM,
          };
    }, [size]);

  const stampDiv = useMemo(() => {
    return (
      <div
        style={{
          position: "absolute",
          left: stampPos === 0 ? "10px" : stampType === 0 ? "210px" : "240px",
          top: "5px",
          fontSize: "10px",
          borderRadius: "4px",
          // border: "1px solid gray",
          padding: "2px",
          backgroundColor: stampBorder === 1 ? color : "transparent",
          color: stampBorder === 1 ? infoTextColor : "black",
        }}
      >
        {stampType === 0 ? (
          <span>MyShop • YouCupon</span>
        ) : stampType === 1 ? (
          <div className="d-flex flex-column gap-0">
            <span style={{ height: "10px", lineHeight: "10px" }}>MyShop</span>
            <span style={{ height: "10px", lineHeight: "10px" }}>•</span>
            <span style={{ height: "10px", lineHeight: "10px" }}>YouCupon</span>
          </div>
        ) : (
          <div className="d-flex flex-column gap-0">
            <span style={{ height: "14px", lineHeight: "14px" }}>MyShop •</span>
            <span style={{ height: "14px", lineHeight: "14px" }}>YouCupon</span>
          </div>
        )}
      </div>
    );
  }, [stampPos, stampType, stampBorder]);

  const fontSize = size === "lg" ? "16px" : size === "md" ? "14px" : "10px";
  const lineHeight = size === "lg" ? "20px" : size === "md" ? "16px" : "12px";
  return (
    <div
      style={{
        ...couponContentContainerStyle,
        ...(shadow ? couponShadowStyle : {}),
        cursor: clickable ? "pointer" : "auto",
      }}
      onClick={() => {
        if (clickable) {
          window.open(url, "_blank").focus();
        }
      }}
    >
      <div
        style={{
          ...couponContentLgStyle, //TODO
          position: "absolute",
          display: "flex",
          flexDirection: "row",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          fontSize: fontSize,
          lineHeight: lineHeight,
        }}
      >
        <div
          style={{
            width: imageWidth,
            minWidth: imageWidth,
            height: contentHeight,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: "8px",
            paddingTop: "8px",
          }}
        >
          <img
            src={imgUrl}
            style={{
              // scale to fit
              // maxWidth: imageWidth,
              // maxHeight: contentHeight,
              // scale to fill
              width: imageWidth - 16,
              height: contentHeight - 16,
              objectFit: "cover",
            }}
          />
        </div>
        <div
          style={{
            ...(USE_GRADIENT
              ? couponProductInfoContainerGradientStyle
              : couponProductInfoContainerStyle),
            width: contentWidth,
          }}
        >
          {stampDiv}

          <span
            style={{
              ...couponProductNameSpanLgStyle, //TODO
              // marginTop: "6px",
            }}
          >
            {productName}
          </span>
          <div
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
                {" "}
                ${originPrice}
              </span>
            )}
            <span>${price}</span>
          </div>
        </div>
        <div
          style={{
            ...couponDiscountInfoContainer,
            width: discountWidth,
            background: color,
            color: infoTextColor,
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "baseline",
              flexDirection: "row",
              gap: "4px",
              fontWeight: "500",
            }}
          >
            <span style={{ fontSize: "1.25em" }}>
              {/* TODO: different currency? */}
              <strong>
                {discountValue}
                {discountType === "percentage" ? "%" : "$"}
              </strong>
            </span>
            <span style={{ fontSize: "0.75em" }}>OFF</span>
          </div>

          <span style={{ fontSize: "0.75em" }}>{formattedExpiration}</span>
        </div>
      </div>
    </div>
  );
}
