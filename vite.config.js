import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        call_back: resolve(__dirname, "pages/call_back/call_back.html"),
        faq: resolve(__dirname, "pages/accordion/accordion.html"),
      },
    },
  },
});
