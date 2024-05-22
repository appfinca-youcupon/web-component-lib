import CouponLg from "./coupon/CouponLg";
import Coupon from "./coupon/Coupon";

const dummy = {
  domain: "datastore88.myshopify.com",
  imgUrl: "https://i.imgur.com/SUeDv6E.jpg",
  productName: "Test Product 1",
  price: "300",
  originPrice: "400",
  color: "#005090",
  expiration: "Oct 12, 2023",
};

function App() {
  return (
    <>
      <h1>YouCupon Components Preview</h1>
      <div>
        <CouponLg {...dummy} />
        <CouponLg {...dummy} />
        <Coupon {...dummy} />
        <Coupon />
      </div>
    </>
  );
}

export default App;
