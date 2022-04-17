import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint";
import viteSentry from "vite-plugin-sentry";
import { resolve } from "path";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const svgConfig = require("./plugins/svgr");
// eslint-disable-next-line @typescript-eslint/no-var-requires
const svgPlugin = require("vite-plugin-svgr");

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(resolve(__dirname), "src"),
      "@utils": resolve(resolve(__dirname), "src/utils"),
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
    viteSentry({
      url: "https://my.ondemand.sentry.com",
      authToken: "",
      org: "my_org",
      project: "my_project",
      release: "1.0",
      deploy: {
        env: "production",
      },
      setCommits: {
        auto: true,
      },
      sourceMaps: {
        include: ["./dist/assets"],
        ignore: ["node_modules"],
        urlPrefix: "~/assets",
      },
      debug: false,
      skipEnvironmentCheck: false,
      dryRun: false,
      vcsRemote: "origin",
      silent: true,
    }),
  ],
});
