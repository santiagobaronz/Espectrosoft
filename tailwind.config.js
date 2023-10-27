/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/**/*.{js,ts,jsx,tsx,mdx}',
	], 

	theme: {

		screens: {
			sm: '400px',
			md: '650px',
			lg: '1000px',
			xl: '1400px',
		},
		container: {
			center: true,
		},
		colors: {
			
			'blue-section': '#0F172B',
			'text-color': '#d2d3e0bf',
			'white': '#ffffff',
			'black': '#000000',

			// Logo

			'dark-blue': '#1B75B0',
			'cta': '#1D2939',
			'light-blue': '#55A2CA',
			'blue-bg': '#EBEFFF',
			'hosting-web': '#EBEFFF',
			'e-commerce': '#BBFABB',

			'gray': 'hsl(246,  6%, 55%)',
			'gray-200': 'hsl(246,  8%, 35%)',
			'pink': 'hsl(270, 55%, 43%)',
			'pink-500': 'hsl(270, 60%, 52%)',
			'blue': 'hsl(220, 80%, 55%)',
			'cyan': 'hsl(180, 50%, 44%)',
			'green': 'hsl(152, 38%, 42%)',
			'yellow': 'hsl(44, 74%, 52%)',
			'red': 'hsl(1, 62%, 44%)',
		}
	},
	plugins: [],
}