import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/Smart-Study-Scheduler-/",
  plugins: [react()],
});
