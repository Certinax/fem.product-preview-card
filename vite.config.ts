import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  const base = process.env.MODE === "production" ? "/frontendmentor/" : "/";

  // https://vitejs.dev/config/
  return defineConfig({
    base: "/frontendmentor/",
    plugins: [react()],
  });
};
