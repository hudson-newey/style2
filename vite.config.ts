import { defineConfig } from "vite";
import postcssAutoPrefixer from "autoprefixer";
import postcssNested from "postcss-nested";

// vite config for the dev server and documentation
export default defineConfig({
  css: {
    postcss: {
      plugins: [postcssNested, postcssAutoPrefixer],
    },
  },
  build: {
    outDir: "./dist/",
    copyPublicDir: false,
    lib: {
      name: "style2",
      fileName: "style2",
      entry: "src/index.scss",
      formats: ["es"],
    },
  },
});
