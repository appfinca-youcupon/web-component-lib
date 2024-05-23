// src/entry-server.js
import React from "react";
import ReactDOMServer from "react-dom/server";
import MailCoupon from "../coupon/MailCoupon";

export function render() {
  return ReactDOMServer.renderToString(<MailCoupon />);
}
