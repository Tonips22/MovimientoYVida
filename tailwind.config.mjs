/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		darkMode: "class",
		extend: {
			colors: {
				'dark': 'var(--dark)',
				'gray': 'var(--gray)',
				'lightGray': 'var(--lightGray)',
				'blue': 'var(--blue)',
				'green': 'var(--green)',
				'white': 'var(--white)',
			}
		},
	},
	plugins: [],
}

