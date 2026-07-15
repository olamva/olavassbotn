import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
	redirects: {
		"/": "/no",
	},
	vite: {
		plugins: [tailwindcss()],
	},
});
