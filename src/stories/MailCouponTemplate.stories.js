import { fn } from "@storybook/test";
import CouponLg from "../../web-components/CouponLg";
import MailCouponTemplate from "../coupon/MailCouponTemplate";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "YouCupon/MailCouponTemplate",
  component: MailCouponTemplate,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
    docs: {
      description: {
        component:
          "YouCupon coupon component for email notification, values are overrides for template generation",
      },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    // color: { control: "color" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    // onClick: fn()
  },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Lg = {
  args: {
    // none
  },
};
