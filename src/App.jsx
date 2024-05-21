import CouponLg from "./coupon/CouponLg";

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
      <h1>YouCupon Components</h1>
      <div>
        <CouponLg {...dummy} />
        <CouponLg {...dummy} />
      </div>
    </>
  );
}

export default App;
