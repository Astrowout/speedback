import { resolve } from "path";
import { defineConfig } from "vite";

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
  server: {
    port: 9000,
  }
})