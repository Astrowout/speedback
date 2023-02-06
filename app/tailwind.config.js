const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: 'jit',
	purge: [
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		fontFamily: {
			'brand': ['var(--font-strait)', ...defaultTheme.fontFamily.serif],
			'body': ['var(--font-inter)', ...defaultTheme.fontFamily.sans],
		},
		container: {
			center: true,
		},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
