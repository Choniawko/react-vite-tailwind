import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@api-services": resolve(__dirname, "./src/shared/api-services"),
      "@utils": resolve(__dirname, "./src/shared/utils"),
      "@ui": resolve(__dirname, "./src/shared/ui"),
    },
  },
  plugins: [react()],
});
