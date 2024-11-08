import { dummyCouponData } from "./Coupon";
import MailCouponLg from "./MailCouponLg";
import PropTypes from "prop-types";

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
 *    template: boolean
 * }} props
 */
export default function MailCouponTemplate(props) {
  return <MailCouponLg template={true} {...props} />;
}

// NOTE: isRequired will only be shown if no default value
MailCouponTemplate.propTypes = {
  // none
};

MailCouponTemplate.defaultProps = {
  // none
};
