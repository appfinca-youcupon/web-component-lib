export const DUMMY_COUPONS_DATA = [
  {
    domain: "datastore88.myshopify.com",
    imgUrl: "https://i.imgur.com/SUeDv6E.jpg",
    productName: "Test Product 1",
    price: "300",
    originPrice: "400",
    color: "#005090",
    expiration: "Oct 12, 2023",
  },
  {
    domain: "datastore88.myshopify.com",
    imgUrl: "https://i.imgur.com/8Plh0zU.jpg",
    productName: "Test Product 2",
    price: "90",
    originPrice: "100",
    off: "10",
    color: "#005090",
    expiration: "Nov 9, 2023",
  },
  // {
  //     domain: "domain1",
  //     imgUrl: "https://i.imgur.com/SUeDv6E.jpg",
  //     productName: "This is a product whatsoever" ,
  //     price: "200",
  //     originPrice: "800",
  // },
  // {
  //     domain: "domain1",
  //     imgUrl: "https://i.imgur.com/SUeDv6E.jpg",
  //     productName: "This is a product whatsoever" ,
  //     price: "200",
  //     originPrice: "800",
  // },
  // {
  //     domain: "domain1",
  //     imgUrl: "https://i.imgur.com/SUeDv6E.jpg",
  //     productName: "This is a product whatsoever" ,
  //     price: "200",
  //     originPrice: "800",
  // },
  {
    domain: "datastore89.myshopify.com",
    imgUrl: "https://i.imgur.com/RWJpWJ7.jpg",
    productName: "Hobo Small",
    price: "600",
    originPrice: "800",
    color: "#800060",
    expiration: "Aug 1, 2023",
  },
  // {
  //     domain: "domain2",
  //     imgUrl: "https://i.imgur.com/SUeDv6E.jpg",
  //     productName: "This is a product whatsoever" ,
  //     price: "200",
  //     originPrice: "800",
  // },
  // {
  //     domain: "domain3",
  //     imgUrl: "https://i.imgur.com/SUeDv6E.jpg",
  //     productName: "This is a product whatsoever" ,
  //     price: "200",
  //     originPrice: "800",
  // }
];

export const DUMMY_COUPONS_DATA_MORE = [
  {
    domain: "someshop.com",
    imgUrl: "https://i.imgur.com/aVQ5MH3.png",
    productName: "Concha PANtuflas Slippers with Memory Foam and Plush Lining",
    price: "13.5",
    originPrice: "15",
    color: "#005090",
    expiration: "Oct 12, 2023",
    expirationTimestamp: 1704227725054,
    discountValue: 10,
  },
  {
    domain: "someshop.com",
    imgUrl: "https://i.imgur.com/uda7Ml2.png",
    productName: "UGG Men's Classic Ultra Mini Fashion Boot",
    price: "95",
    originPrice: "100",
    off: "10",
    color: "#005090",
    expiration: "Nov 9, 2023",
    expirationTimestamp: 1704227725054,
    discountValue: 5,
  },
  {
    domain: "someshop.com",
    imgUrl: "https://i.imgur.com/782KwgU.png",
    productName: "Hey Dude Mens Wally Sox",
    price: "114",
    originPrice: "120",
    color: "#005090",
    expirationTimestamp: 1704227725054,
    discountValue: 5,
  },
  {
    domain: "someshop.com",
    imgUrl: "https://i.imgur.com/oZc1HAj.png",
    productName: "Hipster Hip Hop Longline Crewneck T-Shirt",
    price: "24.99",
    originPrice: "29.99",
    color: "#005090",
    expirationTimestamp: 1704227725054,
    discountValue: 5,
    discountType: "value",
  },
  {
    domain: "someshop.com",
    imgUrl: "https://i.imgur.com/eFt026H.png",
    productName: "Legendary Whitetails Men's Journeyman Shirt Jacket",
    price: "188",
    originPrice: "200",
    color: "#005090",
    expirationTimestamp: 1704227725054,
    discountValue: 12,
    discountType: "value",
  },
  //   {
  //     domain: "anothershop.com",
  //     imgUrl: "https://i.imgur.com/SUeDv6E.jpg",
  //     productName: "Skullcandy Riff Wireless On-Ear Headphones",
  //     price: "90",
  //     originPrice: "100",
  //     color: "#800060",
  //     expiration: "Aug 1, 2023",
  //     discountValue: 10,
  //     expirationTimestamp: 1704227725054,
  //   },
  // {
  //   domain: "domain2",
  //   imgUrl: "https://i.imgur.com/SUeDv6E.jpg",
  //   productName: "This is a product whatsoever",
  //   price: "200",
  //   originPrice: "800",
  //   color: "#800060",
  // },
  // {
  //   domain: "domain3",
  //   imgUrl: "https://i.imgur.com/SUeDv6E.jpg",
  //   productName: "This is a product whatsoever",
  //   price: "200",
  //   originPrice: "800",
  //   color: "#800060",
  // },
];

export const getLargeDummyCoupons = (count) => {
  let coupons = [];
  const colors = ["#005090", "#108090", "#EAFF87", "#D8AAD9"];
  for (let i = 0; i < count; i++) {
    let newCoupons = [...DUMMY_COUPONS_DATA_MORE].slice(i % 3);
    newCoupons = newCoupons?.map((element) => {
      return {
        ...element,
        domain: `TestShop_${i + 1}`,
        expirationTimestamp: 1704227725054 + (i * 20 + 120) * 86400000,
        color: colors[i % colors?.length],
        // color: "#EAFF87",
      };
    });
    coupons = [...coupons, ...newCoupons];
  }
  return coupons;
};
