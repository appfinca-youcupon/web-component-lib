import { useMemo } from "react";
import { renderToString } from "react-dom/server";
import svgToMiniDataURI from "mini-svg-data-uri";
import dayjs from "dayjs";
import convert from "color-convert";
import { CouponBackgroungPng, CouponBackgroungSvg } from "./CouponBackgrounds";
import {
  CouponDiscountSection,
  CouponImage,
  CouponProductSection,
} from "./CouponSections";

const CouponLeft = (props) => {
  return (
    <CouponBackgroungPng
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
    </CouponBackgroungPng>
  );
};

const CouponCenter = (props) => {
  return (
    <CouponBackgroungPng
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
    </CouponBackgroungPng>
  );
};

const CouponRight = (props) => {
  return (
    <CouponBackgroungPng
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
    </CouponBackgroungPng>
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
 * }} props
 */
export default function MailCouponLg(props) {
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
        <CouponLeft {...props} size="lg" />
        <CouponCenter {...props} size="lg" />
        <CouponRight {...props} size="lg" />
      </div>
    </div>
  );
}
