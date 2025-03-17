import PropTypes from "prop-types";
import CouponNew from "./CouponNew";

export const dummyCouponData = {
  domain: "datastore88.myshopify.com",
  imgUrl: "https://i.imgur.com/SUeDv6E.jpg",
  productName: "Test Product 1",
  price: "300",
  originPrice: "400",
  color: "#005090",
  expiration: "Oct 12, 2023",
  expirationTimestamp: 0,
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
 *    outline: boolean,
 *    shadow: boolean,
 *    size: ("sm"|"md"|"lg"),
 *    width: number,
 *    fullWidth: boolean,
 *    layout: number,
 *    shop: string,
 *    signature: string,
 * }} props
 */

export default function Coupon(props) {
  const { size } = props;
  return <CouponNew {...props} />;
}

// NOTE: isRequired will only be shown if no default value
Coupon.propTypes = {
  imgUrl: PropTypes.string,
  productName: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  originPrice: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  expirationTimestamp: PropTypes.number,
  discountValue: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  discountType: PropTypes.oneOf(["value", "percentage"]),
  color: PropTypes.string,
  url: PropTypes.string,
  outline: PropTypes.bool,
  shadow: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  width: PropTypes.number,
  fullWidth: PropTypes.bool,
  layout: PropTypes.oneOf([0, 10, 11, 12, 20, 21, 22, 30, 31, 32, 40, 41, 42]),
  shop: PropTypes.string,
  signature: PropTypes.string,
};

Coupon.defaultProps = {
  imgUrl: dummyCouponData.imgUrl,
  productName: dummyCouponData.productName,
  price: dummyCouponData.price,
  originPrice: dummyCouponData.originPrice,
  expirationTimestamp: dummyCouponData.expiration,
  discountValue: dummyCouponData.discountValue,
  discountType: dummyCouponData.discountType,
  color: dummyCouponData.color,
  url: "",
  outline: true,
  shadow: false,
  size: "lg",
  width: 0,
  fullWidth: false,
  layout: 40,
  shop: "myshop.com",
  signature: "",
};
