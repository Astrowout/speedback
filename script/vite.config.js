import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  root: "./src",
  build: {
    outDir: "public",
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'Speedback script',
      // the proper extensions will be added
      fileName: 'speedback'
    },
  },
  define: {
    'process.env': {}
  },
  plugins: [vue()],
  server: {
    port: 9000,
  }
})