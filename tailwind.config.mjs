/** @type {import('tailwindcss').Config} */
module.exports = {

	darkMode: ["class"],
  	content: [

    	"./pages/**/*.{js,jsx}",
    	"./components/**/*.{js,jsx}",
    	"./app/**/*.{js,jsx}",
    	"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",

  	],
  	prefix: "",
  	theme: {

		container: {

			center: true,
      		padding: "2rem",
      		screens: {
        		"2xl": "1400px",
      		},

		},
    	extend: {

			keyframes: {

				"accordion-down": {

					from: { height: "0" },
          			to: { height: "var(--radix-accordion-content-height)" },

				},
        		"accordion-up": {

					from: { height: "var(--radix-accordion-content-height)" },
          			to: { height: "0" },

				},
      		},
      		animation: {

				"accordion-down": "accordion-down 0.2s ease-out",
        		"accordion-up": "accordion-up 0.2s ease-out",

			},
			colors: {

				"light_green":"#57d68d",
				"dark_green":"#4dbe7e",
				"dark_gray":"#24303a"
				"dark-gray": "#1a232b",
        
			},
			fontFamily: {

				"apercu_pro": [ "Apercu Pro", "sans-serif" ],
				"minion_pro": [ "minion-pro", "serif" ],
				"source_sans_pro": [ "source-sans-pro", "sans-serif" ],

			}

		}

	},
  	plugins: [ require("tailwindcss-animate") ],

}
