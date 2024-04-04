/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'background-header': '#000033',
				'marvel': '#ec1d24',
				'dc': '#004488'
			}
			
		},
	},
	plugins: ['flowbite/plugin'],
}
