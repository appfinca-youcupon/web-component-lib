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
import { CouponRootStyle } from "./CouponStyledElements";
import { getSizeConstants } from "./utils/size";

const CouponLeft = (props) => {
  const { size } = props;
  const { contentHeight, contentWidth, imageWidth, discountWidth, padding } =
    useMemo(() => {
      return getSizeConstants(size);
    }, [size]);

  return (
    <CouponBackgroungPng
      className="h-full"
      align="left"
      style={{
        display: "flex",
        width: "35%",
        justifyContent: "center",
        maxWidth: `${imageWidth - padding * 2}px`,
      }}
      color="#ffffff"
      template={props?.template}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <CouponImage
          {...props}
          imgUrl="https://i.imgur.com/SUeDv6E.jpg"
          size="lg"
        />
      </div>
    </CouponBackgroungPng>
  );
};

const CouponCenter = (props) => {
  return (
    <CouponBackgroungPng
      className="h-full"
      align="center"
      color="#ffffff"
      style={{
        display: "flex",
        flexGrow: 1,
        position: "relative",
        justifyContent: "center",
        width: "35%",
      }}
      template={props?.template}
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
      className="h-full"
      align="right"
      color={props.color}
      style={{
        display: "flex",
        justifyContent: "center",
        flexGrow: 0.75,
        position: "relative",
        width: "30%",
      }}
      template={props?.template}
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
 *    url: string,
 *    template: boolean,
 *    width: number,
 *    fullWidth: boolean
 * }} props
 */
export default function MailCouponLg(props) {
  return (
    <CouponRootStyle {...props} className="stack-row stack-ay-middle h-full">
      <CouponLeft {...props} size="lg" />
      <CouponCenter {...props} size="lg" />
      <CouponRight {...props} size="lg" />
    </CouponRootStyle>
  );
}
