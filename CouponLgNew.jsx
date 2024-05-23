import { useMemo } from "react";
import { renderToString } from "react-dom/server";
import svgToMiniDataURI from "mini-svg-data-uri";
import dayjs from "dayjs";
import convert from "color-convert";
import { CouponBackgroungSvg } from "./CouponBackgrounds";
import {
  CouponDiscountSection,
  CouponImage,
  CouponProductSection,
} from "./CouponSections";

const CouponLeft = (props) => {
  return (
    <CouponBackgroungSvg
      align="left"
      style={{
        display: "flex",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <CouponImage imgUrl="https://i.imgur.com/SUeDv6E.jpg" size="lg" />
      </div>
    </CouponBackgroungSvg>
  );
};

const CouponCenter = (props) => {
  return (
    <CouponBackgroungSvg
      align="center"
      color="#ffffff"
      style={{
        display: "flex",
        flexGrow: 1,
        position: "relative",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <CouponProductSection {...props} />
        {/* <StampDiv {...props} /> */}
      </div>
    </CouponBackgroungSvg>
  );
};

const CouponRight = (props) => {
  return (
    <CouponBackgroungSvg
      align="right"
      color={props.color}
      style={{
        display: "flex",
        justifyContent: "center",
        flexGrow: 0.75,
        position: "relative",
      }}
    >
      <CouponDiscountSection {...props} />
    </CouponBackgroungSvg>
  );
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
 * }} props
 */
export default function CouponLgNew(props) {
  return (
    // TODO: example size
    <div>
      <div
        style={{
          width: "400px",
          height: "120px",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <CouponLeft {...props} />
        <CouponCenter {...props} />
        <CouponRight {...props} />
      </div>
    </div>
  );
}
