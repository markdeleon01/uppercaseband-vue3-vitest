/* eslint-disable */
import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "xs7yhw",
  e2e: {
    specPattern: "cypress/e2e/**/*.{cy,spec}.{js,jsx,ts,tsx}",
    baseUrl: "http://localhost:4173",
  },

  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
    },
  },
});
