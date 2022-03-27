import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint";
import * as path from "path";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const svgConfig = require("./plugins/svgr");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const svgPlugin = require("vite-plugin-svgr");

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(path.resolve(__dirname), "src"),
      "@utils": path.resolve(path.resolve(__dirname), "src/utils"),
    },
  },
  plugins: [
    react(),
    svgPlugin(svgConfig),
    eslintPlugin({
      fix: true,
      include: ["src/**/*.ts", "src/**/*.tsx"],
      throwOnError: true,
      throwOnWarning: true,
    }),
  ],
});
