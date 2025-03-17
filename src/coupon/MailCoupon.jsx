import MailCouponLg from "./MailCouponLg";
import PropTypes from "prop-types";

export const dummyCouponData = {
  domain: "datastore88.myshopify.com",
  imgUrl: "https://i.imgur.com/SUeDv6E.jpg",
  productName: "Test Product 1",
  price: 300,
  originPrice: 400,
  color: "#005090",
  expiration: "Oct 12, 2023",
  discountType: "percentage",
  discountValue: 5,
  signature: "signature",
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
 *    template: boolean,
 *    width: number,
 *    fullWidth: boolean,
 *    signature: string,
 * }} props
 */
export default function MailCoupon(props) {
  const { size } = props;
  return <MailCouponLg {...props} />;
}

// NOTE: isRequired will only be shown if no default value
MailCoupon.propTypes = {
  imgUrl: PropTypes.string,
  productName: PropTypes.string.isRequired,
  price: PropTypes.number,
  originPrice: PropTypes.number,
  expirationTimestamp: PropTypes.number,
  discountValue: PropTypes.number,
  discountType: PropTypes.oneOf(["value", "percentage"]),
  color: PropTypes.string,
  url: PropTypes.string,
  width: PropTypes.number,
  fullWidth: PropTypes.bool,
  signature: PropTypes.string,
};

MailCoupon.defaultProps = {
  imgUrl: dummyCouponData.imgUrl,
  productName: dummyCouponData.productName,
  price: dummyCouponData.price,
  originPrice: dummyCouponData.originPrice,
  expirationTimestamp: dummyCouponData.expiration,
  discountValue: dummyCouponData.discountValue,
  discountType: dummyCouponData.discountType,
  color: dummyCouponData.color,
  url: "",
  width: 400,
  fullWidth: false,
  signature: "",
};
