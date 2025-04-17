import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  base: "/", // or './' depending on your deployment setup
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      "/project-management/v1": {
        target: "http://localhost:3000",
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
