/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				claro:"#F2E3D5",
				oscuro:"#40211A",
				beige:"#D98F4E",
				medioBajo:"#8C6954",
				medioAlto:"#BFA995"
			}
		},
	},
	plugins: [require("@tailwindcss/forms")],
}
