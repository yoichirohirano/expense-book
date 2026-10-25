/// <reference types="vitest/config" />
import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "src"),
    },
  },
  // CRA から引き継いだ環境変数名 (REACT_APP_*) をそのまま使う
  envPrefix: "REACT_APP_",
  server: {
    port: 3000,
  },
  build: {
    outDir: "build",
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/setupTests.ts"],
    include: ["src/**/*.{spec,test}.{ts,tsx}", "src/**/{spec,test}.{ts,tsx}"],
    // Jest 24 で生成した既存スナップショットと同じ書式で比較する
    snapshotFormat: {
      escapeString: true,
      printBasicPrototype: true,
    },
  },
});
