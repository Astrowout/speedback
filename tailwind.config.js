module.exports = {
	mode: 'jit',
	purge: [
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		fontFamily: {
			'brand': ['Strait', 'sans-serif'],
			'body': ['Inter', 'sans-serif'],
		},
		container: {
			center: true,
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}