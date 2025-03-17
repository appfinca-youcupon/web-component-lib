// src/entry-server.js
import React from "react";
import ReactDOMServer from "react-dom/server";
import MailCoupon from "../coupon/MailCoupon";
import MailCouponTemplate from "../coupon/MailCouponTemplate";

export function render() {
  return ReactDOMServer.renderToString(<MailCouponTemplate />);
}

export function renderLarge() {
  return ReactDOMServer.renderToString(
    <MailCouponTemplate />,
    // <MailCouponTemplate discountValue={999999999} />, //> 4 digit
  );
}
