import { useMemo } from "react";
import { renderToString } from "react-dom/server";
import svgToMiniDataURI from "mini-svg-data-uri";
import CouponConstants from "./data/coupon-constants.json";

const COUPON_BACKGROUND_PNG_HOST =
  CouponConstants.couponConstants.backgroundImgHost;
const COUPON_BACKGROUND_PNG_TEMPLATE =
  CouponConstants.emailCouponTemplate.backgroundImgTemplate;

/**
 * @param {{
 *   align: ("left"|"right"|"center")
 *   color: string
 *   style: any
 *   className: string
 * }} props
 */
export const CouponBackgroungSvg = (props) => {
  let { align, color = "#878787" } = props;
  if (align !== "right" && align !== "center") {
    align = "left";
  }

  const colorVal = useMemo(() => {
    if (align === "left") {
      return "#ffffff";
    }
    return color;
  }, [color]);

  const svgSrc = (
    <svg
      width="400"
      height="120"
      viewBox="0 0 400 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M400 2V0H0V2C2.20914 2 4 3.79086 4 6C4 8.20914 2.20914 10 0 10V14C2.20914 14 4 15.7909 4 18C4 20.2091 2.20914 22 0 22V26C2.20914 26 4 27.7909 4 30C4 32.2091 2.20914 34 0 34V38C2.20914 38 4 39.7909 4 42C4 44.2091 2.20914 46 0 46V50C2.20914 50 4 51.7909 4 54C4 56.2091 2.20914 58 0 58V62C2.20914 62 4 63.7909 4 66C4 68.2091 2.20914 70 0 70V74C2.20914 74 4 75.7909 4 78C4 80.2091 2.20914 82 0 82V86C2.20914 86 4 87.7909 4 90C4 92.2091 2.20914 94 0 94V98C2.20914 98 4 99.7909 4 102C4 104.209 2.20914 106 0 106V110C2.20914 110 4 111.791 4 114C4 116.209 2.20914 118 0 118V120H400V118C397.791 118 396 116.209 396 114C396 111.791 397.791 110 400 110V106C397.791 106 396 104.209 396 102C396 99.7909 397.791 98 400 98V94C397.791 94 396 92.2091 396 90C396 87.7909 397.791 86 400 86V82C397.791 82 396 80.2091 396 78C396 75.7909 397.791 74 400 74V70C397.791 70 396 68.2091 396 66C396 63.7909 397.791 62 400 62V58C397.791 58 396 56.2091 396 54C396 51.7909 397.791 50 400 50V46C397.791 46 396 44.2091 396 42C396 39.7909 397.791 38 400 38V34C397.791 34 396 32.2091 396 30C396 27.7909 397.791 26 400 26V22C397.791 22 396 20.2091 396 18C396 15.7909 397.791 14 400 14V10C397.791 10 396 8.20914 396 6C396 3.79086 397.791 2 400 2Z"
        fill={colorVal}
      />
      <path
        d="M0.5 0.5H399.5V1.52746C397.25 1.77619 395.5 3.68372 395.5 6C395.5 8.31628 397.25 10.2238 399.5 10.4725V13.5275C397.25 13.7762 395.5 15.6837 395.5 18C395.5 20.3163 397.25 22.2238 399.5 22.4725V25.5275C397.25 25.7762 395.5 27.6837 395.5 30C395.5 32.3163 397.25 34.2238 399.5 34.4725V37.5275C397.25 37.7762 395.5 39.6837 395.5 42C395.5 44.3163 397.25 46.2238 399.5 46.4725V49.5275C397.25 49.7762 395.5 51.6837 395.5 54C395.5 56.3163 397.25 58.2238 399.5 58.4725V61.5275C397.25 61.7762 395.5 63.6837 395.5 66C395.5 68.3163 397.25 70.2238 399.5 70.4725V73.5275C397.25 73.7762 395.5 75.6837 395.5 78C395.5 80.3163 397.25 82.2238 399.5 82.4725V85.5275C397.25 85.7762 395.5 87.6837 395.5 90C395.5 92.3163 397.25 94.2238 399.5 94.4725V97.5275C397.25 97.7762 395.5 99.6837 395.5 102C395.5 104.316 397.25 106.224 399.5 106.473V109.527C397.25 109.776 395.5 111.684 395.5 114C395.5 116.316 397.25 118.224 399.5 118.473V119.5H0.5V118.473C2.74998 118.224 4.5 116.316 4.5 114C4.5 111.684 2.74998 109.776 0.5 109.527V106.473C2.74998 106.224 4.5 104.316 4.5 102C4.5 99.6837 2.74998 97.7762 0.5 97.5275V94.4725C2.74998 94.2238 4.5 92.3163 4.5 90C4.5 87.6837 2.74998 85.7762 0.5 85.5275V82.4725C2.74998 82.2238 4.5 80.3163 4.5 78C4.5 75.6837 2.74998 73.7762 0.5 73.5275V70.4725C2.74998 70.2238 4.5 68.3163 4.5 66C4.5 63.6837 2.74998 61.7762 0.5 61.5275V58.4725C2.74998 58.2238 4.5 56.3163 4.5 54C4.5 51.6837 2.74998 49.7762 0.5 49.5275V46.4725C2.74998 46.2238 4.5 44.3163 4.5 42C4.5 39.6837 2.74998 37.7762 0.5 37.5275V34.4725C2.74998 34.2238 4.5 32.3163 4.5 30C4.5 27.6837 2.74998 25.7762 0.5 25.5275V22.4725C2.74998 22.2238 4.5 20.3163 4.5 18C4.5 15.6837 2.74998 13.7762 0.5 13.5275V10.4725C2.74998 10.2238 4.5 8.31628 4.5 6C4.5 3.68372 2.74998 1.77619 0.5 1.52746V0.5Z"
        stroke="black"
        stroke-opacity="0.2"
      />
    </svg>
  );
  const svgStr = renderToString(svgSrc);
  const encodedSVGDataURI = svgToMiniDataURI(svgStr);

  return (
    <div
      className={props?.className}
      style={{
        ...props?.style,
        background: `url("${encodedSVGDataURI}") ${align} center`,
      }}
    >
      {props.children}
    </div>
  );
};

/**
 * @param {{
 *   align: ("left"|"right"|"center")
 *   color: string
 *   style: any
 *   className: string
 *   template: bool
 * }} props
 */
export const CouponBackgroungPng = (props) => {
  let { align, color = "#878787", template } = props;

  if (align !== "right" && align !== "center") {
    align = "left";
  }

  const colorVal = useMemo(() => {
    if (align === "left") {
      return "ffffff";
    }
    return color?.replace("#", "");
  }, [color]);

  return (
    <div
      className={props?.className}
      style={{
        ...props?.style,
        background:
          template && color != "#ffffff"
            ? `url(${COUPON_BACKGROUND_PNG_TEMPLATE}) ${align}`
            : `url(${COUPON_BACKGROUND_PNG_HOST}/coupon-${colorVal}.png) ${align}, url(${COUPON_BACKGROUND_PNG_HOST}/coupon-default.png)  ${align}`,
      }}
    >
      {props.children}
    </div>
  );
};