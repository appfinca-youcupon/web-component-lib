import { useMemo } from "react";
import { getSizeConstants } from "./utils/size";

/**
 * @param {{
 *    className: string,
 *    style: any,
 *    width: number,
 *    fullWidth: boolean,
 *    size: ("sm"|"md"|"lg")
 * }} props
 */
export const CouponRootStyle = (props) => {
  const {
    width,
    fullWidth = false,
    size = "lg",
    style = {},
    className = "",
  } = props;

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
  }, [width, fullWidth]);

  let computedMaxWidth = useMemo(() => {
    let { totalWidthMax: defaultMaxWidth } = getSizeConstants(size);
    return defaultMaxWidth;
  }, [size]);

  return (
    <div
      className={className}
      style={{
        ...style,
        // width: "400px",
        width: computedWidth,
        minWidth: computedMinWidth,
        maxWidth: computedMaxWidth,
        height: computedHeight,
        display: "flex",
        flexDirection: "row",
      }}
    >
      {props.children}
    </div>
  );
};
