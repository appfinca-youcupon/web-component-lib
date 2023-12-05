import CouponContent from "./CouponContent";
import styles from "./CouponMd.module.css";

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
export default function CouponMd(props) {
  const { imgUrl, productName, price, originPrice, discount, expiration } =
    props;
  return (
    <div
      className={styles["youcupon-coupon"]}
      style={{ width: "320px", height: "85px", position: "relative" }}
    >
      {/* <svg className={styles["coupon-svg"]} id="example_1" xmlns="http://www.w3.org/2000/svg" width="320" height="85" viewBox="0 0 320 85" fill="none">
            <path fillRule="evenodd" clipRule="evenodd" d="M192.272 0H198.719H205.166H320V4.5C318.343 4.5 317 5.84315 317 7.5C317 9.15685 318.343 10.5 320 10.5V14.5C318.343 14.5 317 15.8431 317 17.5C317 19.1569 318.343 20.5 320 20.5V24.5C318.343 24.5 317 25.8431 317 27.5C317 29.1569 318.343 30.5 320 30.5V34.5C318.343 34.5 317 35.8431 317 37.5C317 39.1569 318.343 40.5 320 40.5V44.5C318.343 44.5 317 45.8431 317 47.5C317 49.1569 318.343 50.5 320 50.5V54.5C318.343 54.5 317 55.8431 317 57.5C317 59.1569 318.343 60.5 320 60.5V64.5C318.343 64.5 317 65.8431 317 67.5C317 69.1569 318.343 70.5 320 70.5V74.5C318.343 74.5 317 75.8431 317 77.5C317 79.1569 318.343 80.5 320 80.5V85H205.166H198.719H192.272H0V80.5C1.65685 80.5 3 79.1569 3 77.5C3 75.8431 1.65685 74.5 0 74.5V70.5C1.65685 70.5 3 69.1569 3 67.5C3 65.8431 1.65685 64.5 0 64.5V60.5C1.65685 60.5 3 59.1569 3 57.5C3 55.8431 1.65685 54.5 0 54.5V50.5C1.65685 50.5 3 49.1569 3 47.5C3 45.8431 1.65685 44.5 0 44.5V40.5C1.65685 40.5 3 39.1569 3 37.5C3 35.8431 1.65685 34.5 0 34.5V30.5C1.65685 30.5 3 29.1569 3 27.5C3 25.8431 1.65685 24.5 0 24.5V20.5C1.65685 20.5 3 19.1569 3 17.5C3 15.8431 1.65685 14.5 0 14.5V10.5C1.65685 10.5 3 9.15685 3 7.5C3 5.84315 1.65685 4.5 0 4.5V0H192.272Z" fill="white"/>
        </svg> */}
      <svg
        className={styles["coupon-svg"]}
        xmlns="http://www.w3.org/2000/svg"
        width="320"
        height="85"
        viewBox="0 0 320 85"
        fill="none"
        style={{
          position: "absolute",
          display: "flex",
          flexDirection: "row",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
        }}
      >
        <mask id="path-1-inside-1_644_2682" fill="white">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M192.272 0H198.719H205.166H320V4.5C318.343 4.5 317 5.84315 317 7.5C317 9.15685 318.343 10.5 320 10.5V14.5C318.343 14.5 317 15.8431 317 17.5C317 19.1569 318.343 20.5 320 20.5V24.5C318.343 24.5 317 25.8431 317 27.5C317 29.1569 318.343 30.5 320 30.5V34.5C318.343 34.5 317 35.8431 317 37.5C317 39.1569 318.343 40.5 320 40.5V44.5C318.343 44.5 317 45.8431 317 47.5C317 49.1569 318.343 50.5 320 50.5V54.5C318.343 54.5 317 55.8431 317 57.5C317 59.1569 318.343 60.5 320 60.5V64.5C318.343 64.5 317 65.8431 317 67.5C317 69.1569 318.343 70.5 320 70.5V74.5C318.343 74.5 317 75.8431 317 77.5C317 79.1569 318.343 80.5 320 80.5V85H205.166H198.719H192.272H0V80.5C1.65685 80.5 3 79.1569 3 77.5C3 75.8431 1.65685 74.5 0 74.5V70.5C1.65685 70.5 3 69.1569 3 67.5C3 65.8431 1.65685 64.5 0 64.5V60.5C1.65685 60.5 3 59.1569 3 57.5C3 55.8431 1.65685 54.5 0 54.5V50.5C1.65685 50.5 3 49.1569 3 47.5C3 45.8431 1.65685 44.5 0 44.5V40.5C1.65685 40.5 3 39.1569 3 37.5C3 35.8431 1.65685 34.5 0 34.5V30.5C1.65685 30.5 3 29.1569 3 27.5C3 25.8431 1.65685 24.5 0 24.5V20.5C1.65685 20.5 3 19.1569 3 17.5C3 15.8431 1.65685 14.5 0 14.5V10.5C1.65685 10.5 3 9.15685 3 7.5C3 5.84315 1.65685 4.5 0 4.5V0H192.272Z"
          />
        </mask>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M192.272 0H198.719H205.166H320V4.5C318.343 4.5 317 5.84315 317 7.5C317 9.15685 318.343 10.5 320 10.5V14.5C318.343 14.5 317 15.8431 317 17.5C317 19.1569 318.343 20.5 320 20.5V24.5C318.343 24.5 317 25.8431 317 27.5C317 29.1569 318.343 30.5 320 30.5V34.5C318.343 34.5 317 35.8431 317 37.5C317 39.1569 318.343 40.5 320 40.5V44.5C318.343 44.5 317 45.8431 317 47.5C317 49.1569 318.343 50.5 320 50.5V54.5C318.343 54.5 317 55.8431 317 57.5C317 59.1569 318.343 60.5 320 60.5V64.5C318.343 64.5 317 65.8431 317 67.5C317 69.1569 318.343 70.5 320 70.5V74.5C318.343 74.5 317 75.8431 317 77.5C317 79.1569 318.343 80.5 320 80.5V85H205.166H198.719H192.272H0V80.5C1.65685 80.5 3 79.1569 3 77.5C3 75.8431 1.65685 74.5 0 74.5V70.5C1.65685 70.5 3 69.1569 3 67.5C3 65.8431 1.65685 64.5 0 64.5V60.5C1.65685 60.5 3 59.1569 3 57.5C3 55.8431 1.65685 54.5 0 54.5V50.5C1.65685 50.5 3 49.1569 3 47.5C3 45.8431 1.65685 44.5 0 44.5V40.5C1.65685 40.5 3 39.1569 3 37.5C3 35.8431 1.65685 34.5 0 34.5V30.5C1.65685 30.5 3 29.1569 3 27.5C3 25.8431 1.65685 24.5 0 24.5V20.5C1.65685 20.5 3 19.1569 3 17.5C3 15.8431 1.65685 14.5 0 14.5V10.5C1.65685 10.5 3 9.15685 3 7.5C3 5.84315 1.65685 4.5 0 4.5V0H192.272Z"
          //   fill="orange"
        />
        <path
          d="M320 0H321V-1H320V0ZM320 4.5V5.5H321V4.5H320ZM320 10.5H321V9.5H320V10.5ZM320 14.5V15.5H321V14.5H320ZM320 20.5H321V19.5H320V20.5ZM320 24.5V25.5H321V24.5H320ZM320 30.5H321V29.5H320V30.5ZM320 34.5V35.5H321V34.5H320ZM320 40.5H321V39.5H320V40.5ZM320 44.5V45.5H321V44.5H320ZM320 50.5H321V49.5H320V50.5ZM320 54.5V55.5H321V54.5H320ZM320 60.5H321V59.5H320V60.5ZM320 64.5V65.5H321V64.5H320ZM320 70.5H321V69.5H320V70.5ZM320 74.5V75.5H321V74.5H320ZM320 80.5H321V79.5H320V80.5ZM320 85V86H321V85H320ZM0 85H-1V86H0V85ZM0 80.5V79.5H-1V80.5H0ZM0 74.5H-1V75.5H0V74.5ZM0 70.5V69.5H-1V70.5H0ZM0 64.5H-1V65.5H0V64.5ZM0 60.5V59.5H-1V60.5H0ZM0 54.5H-1V55.5H0V54.5ZM0 50.5V49.5H-1V50.5H0ZM0 44.5H-1V45.5H0V44.5ZM0 40.5V39.5H-1V40.5H0ZM0 34.5H-1V35.5H0V34.5ZM0 30.5V29.5H-1V30.5H0ZM0 24.5H-1V25.5H0V24.5ZM0 20.5V19.5H-1V20.5H0ZM0 14.5H-1V15.5H0V14.5ZM0 10.5V9.5H-1V10.5H0ZM0 4.5H-1V5.5H0V4.5ZM0 0V-1H-1V0H0ZM198.719 -1H192.272V1H198.719V-1ZM205.166 -1H198.719V1H205.166V-1ZM320 -1H205.166V1H320V-1ZM321 4.5V0H319V4.5H321ZM318 7.5C318 6.39543 318.895 5.5 320 5.5V3.5C317.791 3.5 316 5.29086 316 7.5H318ZM320 9.5C318.895 9.5 318 8.60457 318 7.5H316C316 9.70914 317.791 11.5 320 11.5V9.5ZM321 14.5V10.5H319V14.5H321ZM318 17.5C318 16.3954 318.895 15.5 320 15.5V13.5C317.791 13.5 316 15.2909 316 17.5H318ZM320 19.5C318.895 19.5 318 18.6046 318 17.5H316C316 19.7091 317.791 21.5 320 21.5V19.5ZM321 24.5V20.5H319V24.5H321ZM318 27.5C318 26.3954 318.895 25.5 320 25.5V23.5C317.791 23.5 316 25.2909 316 27.5H318ZM320 29.5C318.895 29.5 318 28.6046 318 27.5H316C316 29.7091 317.791 31.5 320 31.5V29.5ZM321 34.5V30.5H319V34.5H321ZM318 37.5C318 36.3954 318.895 35.5 320 35.5V33.5C317.791 33.5 316 35.2909 316 37.5H318ZM320 39.5C318.895 39.5 318 38.6046 318 37.5H316C316 39.7091 317.791 41.5 320 41.5V39.5ZM321 44.5V40.5H319V44.5H321ZM318 47.5C318 46.3954 318.895 45.5 320 45.5V43.5C317.791 43.5 316 45.2909 316 47.5H318ZM320 49.5C318.895 49.5 318 48.6046 318 47.5H316C316 49.7091 317.791 51.5 320 51.5V49.5ZM321 54.5V50.5H319V54.5H321ZM318 57.5C318 56.3954 318.895 55.5 320 55.5V53.5C317.791 53.5 316 55.2909 316 57.5H318ZM320 59.5C318.895 59.5 318 58.6046 318 57.5H316C316 59.7091 317.791 61.5 320 61.5V59.5ZM321 64.5V60.5H319V64.5H321ZM318 67.5C318 66.3954 318.895 65.5 320 65.5V63.5C317.791 63.5 316 65.2909 316 67.5H318ZM320 69.5C318.895 69.5 318 68.6046 318 67.5H316C316 69.7091 317.791 71.5 320 71.5V69.5ZM321 74.5V70.5H319V74.5H321ZM318 77.5C318 76.3954 318.895 75.5 320 75.5V73.5C317.791 73.5 316 75.2909 316 77.5H318ZM320 79.5C318.895 79.5 318 78.6046 318 77.5H316C316 79.7091 317.791 81.5 320 81.5V79.5ZM321 85V80.5H319V85H321ZM205.166 86H320V84H205.166V86ZM198.719 86H205.166V84H198.719V86ZM192.272 86H198.719V84H192.272V86ZM0 86H192.272V84H0V86ZM-1 80.5V85H1V80.5H-1ZM2 77.5C2 78.6046 1.10457 79.5 0 79.5V81.5C2.20914 81.5 4 79.7091 4 77.5H2ZM0 75.5C1.10457 75.5 2 76.3954 2 77.5H4C4 75.2909 2.20914 73.5 0 73.5V75.5ZM-1 70.5V74.5H1V70.5H-1ZM2 67.5C2 68.6046 1.10457 69.5 0 69.5V71.5C2.20914 71.5 4 69.7091 4 67.5H2ZM0 65.5C1.10457 65.5 2 66.3954 2 67.5H4C4 65.2909 2.20914 63.5 0 63.5V65.5ZM-1 60.5V64.5H1V60.5H-1ZM2 57.5C2 58.6046 1.10457 59.5 0 59.5V61.5C2.20914 61.5 4 59.7091 4 57.5H2ZM0 55.5C1.10457 55.5 2 56.3954 2 57.5H4C4 55.2909 2.20914 53.5 0 53.5V55.5ZM-1 50.5V54.5H1V50.5H-1ZM2 47.5C2 48.6046 1.10457 49.5 0 49.5V51.5C2.20914 51.5 4 49.7091 4 47.5H2ZM0 45.5C1.10457 45.5 2 46.3954 2 47.5H4C4 45.2909 2.20914 43.5 0 43.5V45.5ZM-1 40.5V44.5H1V40.5H-1ZM2 37.5C2 38.6046 1.10457 39.5 0 39.5V41.5C2.20914 41.5 4 39.7091 4 37.5H2ZM0 35.5C1.10457 35.5 2 36.3954 2 37.5H4C4 35.2909 2.20914 33.5 0 33.5V35.5ZM-1 30.5V34.5H1V30.5H-1ZM2 27.5C2 28.6046 1.10457 29.5 0 29.5V31.5C2.20914 31.5 4 29.7091 4 27.5H2ZM0 25.5C1.10457 25.5 2 26.3954 2 27.5H4C4 25.2909 2.20914 23.5 0 23.5V25.5ZM-1 20.5V24.5H1V20.5H-1ZM2 17.5C2 18.6046 1.10457 19.5 0 19.5V21.5C2.20914 21.5 4 19.7091 4 17.5H2ZM0 15.5C1.10457 15.5 2 16.3954 2 17.5H4C4 15.2909 2.20914 13.5 0 13.5V15.5ZM-1 10.5V14.5H1V10.5H-1ZM2 7.5C2 8.60457 1.10457 9.5 0 9.5V11.5C2.20914 11.5 4 9.70914 4 7.5H2ZM0 5.5C1.10457 5.5 2 6.39543 2 7.5H4C4 5.29086 2.20914 3.5 0 3.5V5.5ZM-1 0V4.5H1V0H-1ZM192.272 -1H0V1H192.272V-1Z"
          fill="rgba(0,0,0,0.2)"
          mask="url(#path-1-inside-1_644_2682)"
        />
      </svg>
      {/* <div className={styles["coupon-content-container"]}>
        <div
          className={styles["coupon-content"]}
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "row",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            className={styles["coupon-image-container"]}
            style={{ paddingLeft: "4px" }}
          >
            <img
              src={imgUrl}
              width="80"
              height="80"
              style={{
                margin: "2px",
              }}
            />
          </div>
          <div className={styles["coupon-product-info-container"]}>
            <span>{productName}</span>
            <div
              style={{
                width: "100%",
                display: "flex",
                position: "relative",
                flexDirection: "row",
                gap: "4px",
                fontWeight: "500",
              }}
            >
              <span style={{ textDecoration: "line-through", color: "gray" }}>
                {" "}
                ${originPrice}
              </span>
              <div
                className="ps-3"
                style={{
                  position: "absolute",
                  width: "105px",
                  display: "flex",
                  flexDirection: "row-reverse",
                }}
              >
                <span
                  style={{
                    background: "white",
                  }}
                >
                  ${price}
                </span>
                <div
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
                    width: "8px",
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className={styles["coupon-discount-info-container"]}>
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
                <strong>{`${discount}%`}</strong>
              </span>
              <span style={{ fontSize: "0.75em" }}>OFF</span>
            </div>
            <span style={{ fontSize: "0.75em" }}>{expiration}</span>
          </div>
        </div>
      </div> */}
      <CouponContent {...props} size="md" />
      {(props.outline ?? true) && (
        <svg
          className={styles["coupon-svg"]}
          xmlns="http://www.w3.org/2000/svg"
          width="320"
          height="85"
          viewBox="0 0 320 85"
          fill="none"
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "row",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            pointerEvents: "none",
          }}
        >
          <path
            d="M320 0H321V-1H320V0ZM320 4.5V5.5H321V4.5H320ZM320 10.5H321V9.5H320V10.5ZM320 14.5V15.5H321V14.5H320ZM320 20.5H321V19.5H320V20.5ZM320 24.5V25.5H321V24.5H320ZM320 30.5H321V29.5H320V30.5ZM320 34.5V35.5H321V34.5H320ZM320 40.5H321V39.5H320V40.5ZM320 44.5V45.5H321V44.5H320ZM320 50.5H321V49.5H320V50.5ZM320 54.5V55.5H321V54.5H320ZM320 60.5H321V59.5H320V60.5ZM320 64.5V65.5H321V64.5H320ZM320 70.5H321V69.5H320V70.5ZM320 74.5V75.5H321V74.5H320ZM320 80.5H321V79.5H320V80.5ZM320 85V86H321V85H320ZM0 85H-1V86H0V85ZM0 80.5V79.5H-1V80.5H0ZM0 74.5H-1V75.5H0V74.5ZM0 70.5V69.5H-1V70.5H0ZM0 64.5H-1V65.5H0V64.5ZM0 60.5V59.5H-1V60.5H0ZM0 54.5H-1V55.5H0V54.5ZM0 50.5V49.5H-1V50.5H0ZM0 44.5H-1V45.5H0V44.5ZM0 40.5V39.5H-1V40.5H0ZM0 34.5H-1V35.5H0V34.5ZM0 30.5V29.5H-1V30.5H0ZM0 24.5H-1V25.5H0V24.5ZM0 20.5V19.5H-1V20.5H0ZM0 14.5H-1V15.5H0V14.5ZM0 10.5V9.5H-1V10.5H0ZM0 4.5H-1V5.5H0V4.5ZM0 0V-1H-1V0H0ZM198.719 -1H192.272V1H198.719V-1ZM205.166 -1H198.719V1H205.166V-1ZM320 -1H205.166V1H320V-1ZM321 4.5V0H319V4.5H321ZM318 7.5C318 6.39543 318.895 5.5 320 5.5V3.5C317.791 3.5 316 5.29086 316 7.5H318ZM320 9.5C318.895 9.5 318 8.60457 318 7.5H316C316 9.70914 317.791 11.5 320 11.5V9.5ZM321 14.5V10.5H319V14.5H321ZM318 17.5C318 16.3954 318.895 15.5 320 15.5V13.5C317.791 13.5 316 15.2909 316 17.5H318ZM320 19.5C318.895 19.5 318 18.6046 318 17.5H316C316 19.7091 317.791 21.5 320 21.5V19.5ZM321 24.5V20.5H319V24.5H321ZM318 27.5C318 26.3954 318.895 25.5 320 25.5V23.5C317.791 23.5 316 25.2909 316 27.5H318ZM320 29.5C318.895 29.5 318 28.6046 318 27.5H316C316 29.7091 317.791 31.5 320 31.5V29.5ZM321 34.5V30.5H319V34.5H321ZM318 37.5C318 36.3954 318.895 35.5 320 35.5V33.5C317.791 33.5 316 35.2909 316 37.5H318ZM320 39.5C318.895 39.5 318 38.6046 318 37.5H316C316 39.7091 317.791 41.5 320 41.5V39.5ZM321 44.5V40.5H319V44.5H321ZM318 47.5C318 46.3954 318.895 45.5 320 45.5V43.5C317.791 43.5 316 45.2909 316 47.5H318ZM320 49.5C318.895 49.5 318 48.6046 318 47.5H316C316 49.7091 317.791 51.5 320 51.5V49.5ZM321 54.5V50.5H319V54.5H321ZM318 57.5C318 56.3954 318.895 55.5 320 55.5V53.5C317.791 53.5 316 55.2909 316 57.5H318ZM320 59.5C318.895 59.5 318 58.6046 318 57.5H316C316 59.7091 317.791 61.5 320 61.5V59.5ZM321 64.5V60.5H319V64.5H321ZM318 67.5C318 66.3954 318.895 65.5 320 65.5V63.5C317.791 63.5 316 65.2909 316 67.5H318ZM320 69.5C318.895 69.5 318 68.6046 318 67.5H316C316 69.7091 317.791 71.5 320 71.5V69.5ZM321 74.5V70.5H319V74.5H321ZM318 77.5C318 76.3954 318.895 75.5 320 75.5V73.5C317.791 73.5 316 75.2909 316 77.5H318ZM320 79.5C318.895 79.5 318 78.6046 318 77.5H316C316 79.7091 317.791 81.5 320 81.5V79.5ZM321 85V80.5H319V85H321ZM205.166 86H320V84H205.166V86ZM198.719 86H205.166V84H198.719V86ZM192.272 86H198.719V84H192.272V86ZM0 86H192.272V84H0V86ZM-1 80.5V85H1V80.5H-1ZM2 77.5C2 78.6046 1.10457 79.5 0 79.5V81.5C2.20914 81.5 4 79.7091 4 77.5H2ZM0 75.5C1.10457 75.5 2 76.3954 2 77.5H4C4 75.2909 2.20914 73.5 0 73.5V75.5ZM-1 70.5V74.5H1V70.5H-1ZM2 67.5C2 68.6046 1.10457 69.5 0 69.5V71.5C2.20914 71.5 4 69.7091 4 67.5H2ZM0 65.5C1.10457 65.5 2 66.3954 2 67.5H4C4 65.2909 2.20914 63.5 0 63.5V65.5ZM-1 60.5V64.5H1V60.5H-1ZM2 57.5C2 58.6046 1.10457 59.5 0 59.5V61.5C2.20914 61.5 4 59.7091 4 57.5H2ZM0 55.5C1.10457 55.5 2 56.3954 2 57.5H4C4 55.2909 2.20914 53.5 0 53.5V55.5ZM-1 50.5V54.5H1V50.5H-1ZM2 47.5C2 48.6046 1.10457 49.5 0 49.5V51.5C2.20914 51.5 4 49.7091 4 47.5H2ZM0 45.5C1.10457 45.5 2 46.3954 2 47.5H4C4 45.2909 2.20914 43.5 0 43.5V45.5ZM-1 40.5V44.5H1V40.5H-1ZM2 37.5C2 38.6046 1.10457 39.5 0 39.5V41.5C2.20914 41.5 4 39.7091 4 37.5H2ZM0 35.5C1.10457 35.5 2 36.3954 2 37.5H4C4 35.2909 2.20914 33.5 0 33.5V35.5ZM-1 30.5V34.5H1V30.5H-1ZM2 27.5C2 28.6046 1.10457 29.5 0 29.5V31.5C2.20914 31.5 4 29.7091 4 27.5H2ZM0 25.5C1.10457 25.5 2 26.3954 2 27.5H4C4 25.2909 2.20914 23.5 0 23.5V25.5ZM-1 20.5V24.5H1V20.5H-1ZM2 17.5C2 18.6046 1.10457 19.5 0 19.5V21.5C2.20914 21.5 4 19.7091 4 17.5H2ZM0 15.5C1.10457 15.5 2 16.3954 2 17.5H4C4 15.2909 2.20914 13.5 0 13.5V15.5ZM-1 10.5V14.5H1V10.5H-1ZM2 7.5C2 8.60457 1.10457 9.5 0 9.5V11.5C2.20914 11.5 4 9.70914 4 7.5H2ZM0 5.5C1.10457 5.5 2 6.39543 2 7.5H4C4 5.29086 2.20914 3.5 0 3.5V5.5ZM-1 0V4.5H1V0H-1ZM192.272 -1H0V1H192.272V-1Z"
            fill="rgba(0,0,0,0.2)"
            mask="url(#path-1-inside-1_644_2682)"
          />
        </svg>
      )}
    </div>
  );
}
