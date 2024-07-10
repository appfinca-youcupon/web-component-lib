import Coupon from "./Coupon";
import PropTypes from "prop-types";
import dummyCoupons from "./data/dummy-coupons.json";
import MailCoupon from "./MailCoupon";
import { getLargeDummyCoupons } from "./utils/dummy";

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
    <div className="col-12 col-md-6 col-xl-4 p-2">{props?.children}</div>
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
    <div className="container row">
      {couponsData?.length > 0 ? (
        couponsData?.map((couponData, idx) => {
          return (
            <CouponSimpleContainer {...props} key={idx}>
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
  layout: PropTypes.oneOf([0, 10, 11, 12, 20, 21, 22, 30, 31, 32, 40, 41, 42]),
};

Coupons.defaultProps = {
  couponsData: dummyCoupons.dummyCouponsLarge,
  // couponsData: getLargeDummyCoupons(15),
  width: 400,
  fullWidth: false,
  mail: false,
  layout: 40,
};
