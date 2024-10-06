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
			},

			animation:{
				fadeIn: "fadeIn",
				fadeOut: "fadeOut",
				scaleIn: "scaleIn",
				scaleOut: "scaleOut",
			},

			keyframes:{
				fadeIn:{
					"0%": { opacity: 0 },
					"100%": { opacity: 1 },
				},
				fadeOut:{
					"0%": { opacity: 1 },
					"100%": { opacity: 0 },
				},
				scaleIn:{
					"0%": { transform: "scale(0)" },
					"100%": { transform: "scale(1)" },
				},
				scaleOut:{
					"0%": { transform: "scale(1)" },
					"100%": { transform: "scale(0)" },
				},
			},

		},
	},
	plugins: [require("@tailwindcss/forms")],
}
