import Coupon from "./Coupon";
import CouponLgNew from "./CouponLgNew";
import CouponMdNew from "./CouponMdNew";
import PropTypes from "prop-types";
import dummyCoupons from "./data/dummy-coupons.json";
import MailCoupon from "./MailCoupon";

/**
 * @typedef {Object} CouponData
 * @property productName {string}
 * @property price {string}
 * @property originPrice {string}
 * @property expirationTimestamp {string}
 * @property discountValue {string}
 * @property discountType {string}
 * @property color {string}
 * @property url {string}
 */

const CouponSimpleContainer = (props) => {
  return props?.fullWidth ? (
    <div
      style={{
        display: "flex",
        flexGrow: 1,
      }}
    >
      {props?.children}
    </div>
  ) : (
    props?.children
  );
};

/**
 * @param {{
 *    couponsData: Array<CouponData>,
 *    outline: boolean,
 *    shadow: boolean,
 *    size: ("sm"|"md"|"lg"),
 *    width: number,
 *    fullWidth: boolean
 *    mail: boolean
 * }} props
 */
export default function Coupons(props) {
  const { couponsData, mail, ...stylingProps } = props;
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        gap: "8px",
        justifyContent: "center",
      }}
    >
      {couponsData?.length > 0 ? (
        couponsData?.map((couponData, idx) => {
          return (
            <CouponSimpleContainer>
              {mail ? (
                <MailCoupon
                  key={idx + couponData.productName}
                  {...couponData}
                  {...stylingProps}
                />
              ) : (
                <Coupon
                  key={idx + couponData.productName}
                  {...couponData}
                  {...stylingProps}
                />
              )}
            </CouponSimpleContainer>
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}

Coupons.propTypes = {
  couponsData: PropTypes.arrayOf(
    PropTypes.shape({
      imgUrl: PropTypes.string,
      productName: PropTypes.string.isRequired,
      price: PropTypes.number,
      originPrice: PropTypes.number,
      expirationTimestamp: PropTypes.number,
      discountValue: PropTypes.number,
      discountType: PropTypes.oneOf(["value", "percentage"]),
      color: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
  outline: PropTypes.bool,
  shadow: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  width: PropTypes.number,
  fullWidth: PropTypes.bool,
  mail: PropTypes.bool,
};

Coupons.defaultProps = {
  couponsData: dummyCoupons.dummyCouponsMedium,
  width: 400,
  fullWidth: false,
  mail: false,
};
