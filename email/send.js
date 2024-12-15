import { SESClient, SendEmailCommand } from "@aws-sdk/client-ses";
import fs from "fs/promises";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const EMAIL_SOURCE = "no-reply@youcupon.com";
const EMAIL_TARGET = "apple894894@gmail.com";
// const EMAIL_TARGET = "ytlee@datalab.cs.nthu.edu.tw";
const EMAIL_SUBJECT = "YouCupon Email Test";
const EMAIL_CHARSET = "UTF-8";

const couponsData = [
  {
    domain: "datastore88.myshopify.com",
    imgUrl: "https://i.imgur.com/SUeDv6E.jpg",
    productName: "1st Test Product",
    price: 300,
    originPrice: 400,
    color: "#005090",
    // expiration: "Oct 12, 2023", QWQ
    discountType: "percentage",
    discountValue: 5,
  },
  {
    domain: "datastore88.myshopify.com",
    imgUrl: "https://i.imgur.com/SUeDv6E.jpg",
    productName: "2nd Prod",
    price: 300,
    originPrice: 400,
    color: "#005090",
    // expiration: "Oct 12, 2023", QWQ
    discountType: "percentage",
    discountValue: 5,
  },
  {
    domain: "datastore88.myshopify.com",
    imgUrl: "https://i.imgur.com/SUeDv6E.jpg",
    productName:
      "HelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHelloHello",
    price: 300,
    originPrice: 400,
    color: "#005090",
    // expiration: "Oct 12, 2023", QWQ
    discountType: "percentage",
    discountValue: 5,
  },
];

const getCouponHtml = async (data) => {
  let couponTemplate = await fs.readFile(
    path.resolve(__dirname, "./build/coupon-template.html"),
    "utf8",
  );
  couponTemplate = couponTemplate.replace("{PRODUCT_NAME}", data.productName);
  return couponTemplate;
};

const getComposedCouponsHtml = async () => {
  let couponsHtml = "";
  for (let couponData of couponsData) {
    couponsHtml += await getCouponHtml(couponData);
  }

  return couponsHtml;
};

const getComposedEmailHtml = async () => {
  let emailTemplate = await fs.readFile(
    // path.resolve(__dirname, "./email-template-simple.html"),
    path.resolve(__dirname, "./email-template-customer.html"),
    "utf8",
  );
  const coupons = await getComposedCouponsHtml();
  emailTemplate = emailTemplate.replace("{coupon}", coupons);
  // await fs.writeFile("./outQWQ2.txt", emailTemplate);
  return emailTemplate;
};

const sendEmail = async () => {
  const client = new SESClient({ region: "us-west-2" });
  const input = {
    Source: EMAIL_SOURCE, // required
    Destination: {
      ToAddresses: [
        // AddressList
        EMAIL_TARGET,
      ],
      CcAddresses: [],
      BccAddresses: [],
    },
    Message: {
      Subject: {
        Data: EMAIL_SUBJECT, // required
        Charset: EMAIL_CHARSET,
      },
      Body: {
        // Text: {
        //   Data: "STRING_VALUE", // required
        //   Charset: EMAIL_CHARSET,
        // },
        Html: {
          Data: await getComposedEmailHtml(),
          Charset: EMAIL_CHARSET,
        },
      },
    },
    // ReplyToAddresses: ["STRING_VALUE"],
    // ReturnPath: "STRING_VALUE",
    // SourceArn: "STRING_VALUE",
    // ReturnPathArn: "STRING_VALUE",
    // Tags: [
    //   {
    //     Name: "STRING_VALUE", // required
    //     Value: "STRING_VALUE", // required
    //   },
    // ],
    // ConfigurationSetName: "STRING_VALUE",
  };
  const command = new SendEmailCommand(input);
  const response = await client.send(command);
};

sendEmail();
