import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

const repository = "/fem.product-preview-card/";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const baseRoute = process.env.NODE_ENV === "production" ? repository : "/";
  // https://vitejs.dev/config/
  return defineConfig({
    base: baseRoute,
    plugins: [react()],
  });
};
