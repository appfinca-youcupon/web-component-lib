import CouponLg from "./CouponLg";
import CouponLgNew from "./CouponLgNew";
import CouponMd from "./CouponMd";
import CouponSm from "./CouponSm";
import CouponSvg from "./CouponSvg";
import PropTypes from "prop-types";

export const dummyCouponData = {
  domain: "datastore88.myshopify.com",
  imgUrl: "https://i.imgur.com/SUeDv6E.jpg",
  productName: "Test Product 1",
  price: "300",
  originPrice: "400",
  color: "#005090",
  expiration: "Oct 12, 2023",
  discountType: "percentage",
  discountValue: 5,
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
 *    url: string
 *    outline: boolean
 *    shadow: boolean
 *    size: ("sm"|"md"|"lg")
 * }} props
 */
export default function Coupon(props) {
  const { size } = props;
  return <CouponLgNew {...props} />;
  // return size === "sm" ? (
  //   <CouponSm {...props} />
  // ) : size === "md" ? (
  //   <CouponMd {...props} />
  // ) : (
  //   <CouponLg {...props} />
  // );
}

Coupon.propTypes = {
  imgUrl: PropTypes.string,
  productName: PropTypes.string,
  price: PropTypes.number,
  originPrice: PropTypes.number,
  expirationTimestamp: PropTypes.number,
  discountValue: PropTypes.number,
  discountType: PropTypes.oneOf(["value", "percentage"]),
  color: PropTypes.string,
  url: PropTypes.string,
  outline: PropTypes.bool,
  shadow: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "md", "lg"]),
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
};
