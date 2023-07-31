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
			lg: '870px',
			xl: '1400px',
		},
		container: {
			center: true,
		},
		colors: {
			'bg-color': '#0d1117',
			'main-purple': '#785eff',
			'text-color': '#d2d3e0bf',
			'main-green': '#2faf5a',
			'white': '#ffffff',
			'black': '#000000',
			'hover-color': '#37384b42',
			'sub-menus': '#1D1E2B',
			'light-blue': '#306EE8',
			'text-blue': '#A8C0F0',

			// Logo

			'dark-blue': '#1B75B0',
			'light-blue': '#55A2CA',

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