/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'dark': 'var(--dark)',
				'gray': 'var(--gray)',
				'lightGray': 'var(--lightGray)',
				'blue': 'var(--blue)',
				'green': 'var(--green)',
				'white': 'var(--white)',
			},

			fontFamily: {
				'primary': 'Raleway Variable, sans-serif',
				'secondary': 'Roboto, sans-serif'
			}
		},
	},
	plugins: [],
	darkMode: "class"
}

