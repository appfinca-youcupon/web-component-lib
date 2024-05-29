import { fileURLToPath } from "url";
import { getLargeDummyCoupons } from "../utils/dummy.js";
import dummyJson from "./dummy-coupons.json" assert { type: "json" };
import fs from "fs";
import path from "path";

const run = () => {
  let dummy = getLargeDummyCoupons(3);
  console.log(dummy);
  dummyJson.dummyCouponsLarge = dummy;

  const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
  const __dirname = path.dirname(__filename); // get the name of the directory

  fs.writeFileSync(
    path.resolve(__dirname, "./dummy-coupons.json"),
    JSON.stringify(dummyJson),
  );
};

run();
