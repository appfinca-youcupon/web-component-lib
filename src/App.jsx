import CouponLg from "./coupon/CouponLg";
import Coupon from "./coupon/Coupon";
import MailCoupon from "./coupon/MailCoupon";
import CouponNew from "./coupon/CouponNew";

import "bootstrap/dist/css/bootstrap.min.css";

const dummy = {
  domain: "datastore88.myshopify.com",
  imgUrl: "https://i.imgur.com/SUeDv6E.jpg",
  productName: "Test Product 1",
  price: "300",
  originPrice: "400",
  color: "#8899EF",
  expiration: "Oct 12, 2023",
  discountValue: 15,
};

function App() {
  return (
    <div className="m-2">
      <h1>YouCupon Components Preview</h1>
      <div className="d-flex flex-row flex-wrap gap-2">
        {[10, 11, 12, 20, 21, 22, 30, 31, 32, 40, 41, 42, 0].map((element) => {
          return (
            <CouponNew
              {...dummy}
              layout={element}
              size="lg"
              width={400}
              fullWidth={false}
              key={element}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
