import { useMemo } from "react";
import { getSizeConstants } from "./utils/size";

/**
 * @param {{
 *    className: string,
 *    style: any,
 *    width: number,
 *    fullWidth: boolean,
 *    size: ("sm"|"md"|"lg")
 *    url: string,
 * }} props
 */
export const CouponRootStyle = (props) => {
  const {
    width,
    fullWidth = false,
    size = "lg",
    style = {},
    className = "",
    url = "",
  } = props;

  const fontSize = size === "lg" ? "16px" : size === "md" ? "14px" : "10px";
  const lineHeight = size === "lg" ? "20px" : size === "md" ? "16px" : "12px";

  const defaultWidth = useMemo(() => {
    return size == "sm" ? "200px" : size == "md" ? "300px" : "400px";
  }, [size]);

  const computedHeight = useMemo(() => {
    let { contentHeight } = getSizeConstants(size);
    return contentHeight;
  }, [size]);

  const computedWidth = useMemo(() => {
    return fullWidth ? "100%" : width > 0 ? `${width}px` : defaultWidth;
  }, [defaultWidth, width, fullWidth]);

  const computedMinWidth = useMemo(() => {
    let { totalWidthMin: defaultMinWidth } = getSizeConstants(size);
    return Math.max(width, defaultMinWidth);
  }, [width, fullWidth, size]);

  let computedMaxWidth = useMemo(() => {
    let { totalWidthMax: defaultMaxWidth } = getSizeConstants(size);
    return defaultMaxWidth;
  }, [size]);

  let clickable = useMemo(() => {
    return url?.length > 1; //TODO: validate url
  }, [url]);

  return (
    <div
      className={className}
      onClick={() => {
        if (clickable) {
          window.open(url, "_blank").focus();
        }
      }}
      style={{
        ...style,
        // width: "400px",
        width: computedWidth,
        minWidth: computedMinWidth,
        maxWidth: computedMaxWidth,
        height: computedHeight,
        display: "flex",
        flexDirection: "row",
        fontSize: fontSize,
        lineHeight: lineHeight,
        cursor: clickable ? "pointer" : "default",
      }}
    >
      {props.children}
    </div>
  );
};
