// render.js
import { build } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import fs from "fs/promises";

async function render() {
  // Build the project using Vite
  // await build({
  //   // configFile: path.resolve(__dirname, "src/vite.config.js"),
  //   // configFile: "./vite.config.js",
  //   build: {
  //     ssr: "./src/render/render-email-coupon-template-entry.jsx",
  //   },
  // });
  await build({
    plugins: [react()],
    build: {
      outDir: "dist-render",
      ssr: "./src/render/render-email-coupon-template-entry.jsx",
      rollupOptions: {
        input: "./src/render/render-email-coupon-template-entry.jsx",
      },
    },
  });

  // Import the server entry point dynamically
  let { render } = await import(
    "./dist-render/render-email-coupon-template-entry.js"
  );
  const htmlString = render();
  // console.log(htmlString);
  try {
    await fs.writeFile("./email/coupon-template.html", htmlString);
  } catch (err) {
    console.error(err);
  }
}

render();
