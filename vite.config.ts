import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const baseroute =
    process.env.NODE_ENV === "production" ? "/frontendmentor/" : "/";
  // https://vitejs.dev/config/
  return defineConfig({
    base: baseroute,
    plugins: [react()],
  });
};
