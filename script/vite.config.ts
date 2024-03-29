import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import eslint from "vite-plugin-eslint";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
	root: "./src",
	build: {
		outDir: "public",
		lib: {
			// Could also be a dictionary or array of multiple entry points
			entry: resolve(__dirname, "lib/main.ts"),
			// the proper extensions will be added
			fileName: "speedback",
			formats: ["es"],
		},
	},
	plugins: [
		svelte({
			configFile: "../svelte.config.js"
		}),
		eslint({
			fix: true,
		}),
	],
	define: {
		"process.env": {}
	},
	server: {
		port: 9000,
	}
});
