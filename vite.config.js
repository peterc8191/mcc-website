import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Served from https://peterc8191.github.io/mcc-website/
export default defineConfig({
  base: "/mcc-website/",
  plugins: [react()],
});
