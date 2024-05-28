/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
		  'sm': '319px',
		  // => @media (min-width: 640px) { ... }
	
		  'md': '768px',
		  // => @media (min-width: 768px) { ... }
	
		  'lg': '1024px',
		  // => @media (min-width: 1024px) { ... }
	
		  'xl': '1280px',
		  // => @media (min-width: 1280px) { ... }
	
		  '2xl': '1493px',
		  // => @media (min-width: 1536px) { ... }
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			'principal': '#dc2626',
			'instagram': '#C13584',
			'youtube': '#dc2626',
			'white': '#ffffff',
			'purple': '#3f3cbb',
			'midnight': '#121063',
			'metal': '#565584',
			'tahiti': '#3ab7bf',
			'silver': '#5c5c5c',
			'bubble-gum': '#ff77e9',
			'bermuda': '#78dcca',
		  },
	  },
	plugins: [],
}
