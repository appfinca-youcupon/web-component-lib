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
  StampDiv,
} from "./CouponSections";
import { CouponRootStyle } from "./CouponStyledElements";
import { getSizeConstants } from "./utils/size";

const CouponLeft = (props) => {
  const { size, imgUrl, layout } = props;

  const showStamp = useMemo(() => {
    return Math.floor(layout / 10) === 1 || Math.floor(layout / 10) === 2;
  }, [layout]);

  const { contentHeight, contentWidth, imageWidth, discountWidth, padding } =
    useMemo(() => {
      return getSizeConstants(size);
    }, [size]);

  return (
    <CouponBackgroungSvg
      align="left"
      style={{
        display: "flex",
        width: "35%",
        justifyContent: "center",
        maxWidth: `${imageWidth - padding * 2}px`,
      }}
      size={size}
    >
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        {showStamp ? <StampDiv {...props} /> : <></>}
        <CouponImage imgUrl={imgUrl} size={size} />
      </div>
    </CouponBackgroungSvg>
  );
};

const CouponCenter = (props) => {
  const { size, layout } = props;

  const showStamp = useMemo(() => {
    return Math.floor(layout / 10) === 3 || Math.floor(layout / 10) === 4;
  }, [layout]);

  return (
    <CouponBackgroungSvg
      align="center"
      color="#ffffff"
      style={{
        display: "flex",
        flexGrow: 1,
        position: "relative",
        justifyContent: "center",
        width: "35%", // TODO: better styling
      }}
      size={size}
    >
      <div
        className="stack-col gap-0"
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CouponProductSection {...props} />
        {showStamp ? <StampDiv {...props} /> : <></>}
      </div>
    </CouponBackgroungSvg>
  );
};

const CouponRight = (props) => {
  const { size } = props;
  return (
    <CouponBackgroungSvg
      align="right"
      color={props.color}
      style={{
        display: "flex",
        justifyContent: "center",
        flexGrow: 0.75,
        position: "relative",
        width: "30%", //TODO?
      }}
      size={size}
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
 *    discountType: ("value"|"percentage"),
 *    color: string,
 *    url: string,
 *    outline: boolean,
 *    shadow: boolean,
 *    size: ("sm"|"md"|"lg"),
 *    width: number,
 *    fullWidth: boolean,
 *    layout: number,
 *    shop: string
 * }} props
 */
export default function CouponNew(props) {
  return (
    <CouponRootStyle {...props}>
      <CouponLeft {...props} />
      <CouponCenter {...props} />
      <CouponRight {...props} />
    </CouponRootStyle>
  );
}
