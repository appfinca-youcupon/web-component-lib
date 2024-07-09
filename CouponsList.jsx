import Coupon from "./Coupon";
import PropTypes from "prop-types";
import dummyCoupons from "./data/dummy-coupons.json";
import MailCoupon from "./MailCoupon";
import { getLargeDummyCoupons } from "./utils/dummy";
import Icon from "@mdi/react";
import { mdiMagnify, mdiOpenInNew, mdiSearchWeb } from "@mdi/js";

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
export default function CouponsList(props) {
  const { couponsData, mail, ...stylingProps } = props;
  return (
    <div
      style={{
        width: "400px",
        height: "520px",
        borderRadius: "0.5em",
        border: "1px solid rgba(0,0,0,0.25)",
      }}
    >
      <div className="d-flex flex-column justify-content-center align-items-center py-3 flex-grow-1">
        <div className="px-3">
          <h5 className="mb-3">Your Coupons</h5>
        </div>
        {/* body */}
        <div className="d-flex flex-column gap-2 flex-grow-1 overflow-scroll">
          <div className="d-flex flex-column gap-2 flex-grow-1 overflow-scroll">
            {couponsData?.length > 0 ? (
              couponsData?.map((couponData, idx) => {
                return (
                  <CouponSimpleContainer {...props} key={idx}>
                    <Coupon
                      key={idx + couponData.productName}
                      {...couponData}
                      {...stylingProps}
                    />
                  </CouponSimpleContainer>
                );
              })
            ) : (
              <></>
            )}
          </div>
        </div>
        {/* footer */}
        <div className="d-flex flex-row gap-1 align-items-center">
          <Icon path={mdiOpenInNew} size={0.75} />
          <span
            onClick={() => {
              //   let search = searchParams.get("c");
              //   let url = `/wallet?c=${encodeURIComponent(search)}`;
              //   window.open(url, "_blank").focus();
            }}
          >
            Login and save to wallet
          </span>
        </div>
      </div>
    </div>
  );
}

CouponsList.propTypes = {
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
};

CouponsList.defaultProps = {
  couponsData: dummyCoupons.dummyCouponsMedium,
  size: "md",
  fullWidth: false,
  mail: false,
  layout: 0,
};
