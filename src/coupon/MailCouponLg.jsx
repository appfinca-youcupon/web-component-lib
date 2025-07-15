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
  StampDiv,
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
    <a
      href="{URL}"
      // className="h-full"
      style={{
        display: "block",
        height: "120px",
      }}
    >
      <CouponBackgroungPng
        className="h-full w-32"
        align="left"
        style={{
          display: "flex",
          // width: "35%",
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
    </a>
  );
};

const CouponCenter = (props) => {
  return (
    <a
      href="{URL}"
      // className="h-full"
      style={{
        display: "block",
        height: "120px",
      }}
    >
      <CouponBackgroungPng
        className="h-full w-56"
        align="center"
        color="#ffffff"
        style={{
          display: "flex",
          flexGrow: 1,
          position: "relative",
          justifyContent: "center",
          // width: "35%",
        }}
        template={props?.template}
      >
        <div
          className="stack-col h-full px-2 w-full"
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div className="h-auto text-dark mt-2">
            <div className="stack-col stack-ay-middle">
              <CouponProductSection {...props} />
            </div>
          </div>
          <div className="my-0 text-right w-full">
            <StampDiv {...props} layout={40} />
          </div>
        </div>
      </CouponBackgroungPng>
    </a>
  );
};

const CouponRight = (props) => {
  return (
    <a
      href="{URL}"
      // className="h-full"
      style={{
        display: "block",
        height: "120px",
      }}
    >
      <CouponBackgroungPng
        className="h-full w-32"
        align="right"
        color={props.color}
        style={{
          display: "flex",
          justifyContent: "center",
          flexGrow: 0.75,
          position: "relative",
          // width: "30%",
        }}
        template={props?.template}
      >
        <div className="px-1 w-full stack-col stack-ax-center">
          <CouponDiscountSection {...props} />
        </div>
      </CouponBackgroungPng>
    </a>
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
 *    fullWidth: boolean,
 *    signature: string,
 *    appid: string,
 * }} props
 */

export default function MailCouponLg(props) {
  // TODO: set email width
  return (
    <CouponRootStyle {...props} className="stack-row stack-ay-middle my-1">
      <CouponLeft {...props} size="lg" />
      <CouponCenter {...props} size="lg" />
      <CouponRight {...props} size="lg" />
    </CouponRootStyle>
  );
}
