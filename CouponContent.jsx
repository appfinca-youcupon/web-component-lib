import dayjs from "dayjs";
import styles from "./Coupon.module.css";
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
export default function CouponContent(props) {
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

  const fontSize = size === "lg" ? "16px" : size === "md" ? "14px" : "10px";
  const lineHeight = size === "lg" ? "20px" : size === "md" ? "16px" : "12px";
  return (
    <div
      className={
        styles["coupon-content-container"] +
        " " +
        (shadow ? styles["coupon-shadow"] : "")
      }
      style={{
        cursor: clickable ? "pointer" : "auto",
      }}
      onClick={() => {
        if (clickable) {
          window.open(url, "_blank").focus();
        }
      }}
    >
      <div
        className={styles["coupon-content-" + size]}
        style={{
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
          className={styles["coupon-image-container"]}
          style={{
            width: imageWidth,
            minWidth: imageWidth,
            height: contentHeight,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingLeft: 0,
            paddingTop: 0,
          }}
        >
          <img
            src={imgUrl}
            style={{
              // scale to fit
              // maxWidth: imageWidth,
              // maxHeight: contentHeight,
              // scale to fill
              width: imageWidth,
              height: contentHeight,
              objectFit: "cover",
            }}
          />
        </div>
        <div
          className={
            USE_GRADIENT
              ? styles["coupon-product-info-container-gradient"]
              : styles["coupon-product-info-container"]
          }
          style={{
            width: contentWidth,
          }}
        >
          <span className={styles["coupon-product-name-span-" + size]}>
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
          className={`${styles["coupon-discount-info-container"]}`}
          style={{
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
