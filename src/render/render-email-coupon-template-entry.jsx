// src/entry-server.js
import React from "react";
import ReactDOMServer from "react-dom/server";
import MailCoupon from "../coupon/MailCoupon";
import MailCouponTemplate from "../coupon/MailCouponTemplate";

export function render() {
  return ReactDOMServer.renderToString(<MailCouponTemplate />);
}
