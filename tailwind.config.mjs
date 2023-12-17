/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  colors: {
			skyBlue: '#87CEEB',    // Azul cielo muy claro
			strongBlue: '#00008B', 
			graysoft: '#F5FFFA',
			etasa: '#ffb810',
			azulgris: '#7f8c9d',
			dorado: '#FFD700',
			cobre: '#B87333',
			azulmarino: '#1A237E',
			verdeoscuro:'#006405',
			amarilloclaro: '#FFFFE0',
			verdementa: '#98FB98',
			esmeralda: '#00b894',
			// Azul mediano fuerte
		  },
		  fontFamily: {
			'raleway': ['Raleway', 'sans-serif'],
		  },
		  backgroundImage: {
			'gradient-blue': 'linear-gradient(to bottom, var(--colors-skyBlue), var(--colors-strongBlue))',
		  },
		},
	  },
	plugins: [require("daisyui")],
}
