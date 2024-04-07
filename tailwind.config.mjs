/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'background-header': '#2874A6',
				'marvel': '#ec1d24',
				'dc': '#004488',
				'hover': '#2874A6 '
			}
			
		},
	},
	plugins: ['flowbite/plugin'],
}
