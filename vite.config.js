import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages serves project sites from "/<repo>/" but user sites from "/".
// In CI, actions/configure-pages injects the correct value via BASE_PATH.
// Locally there is no sub-path, so default to "/".
export default defineConfig(() => ({
  plugins: [react()],
  base: process.env.BASE_PATH || "/",
}));