module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			keyframes: {
				slideVertical: {
					"0%": {
						transform: "translateY(50%)",
						backgroundColor: "opacity-50",
					},
					"100%": {
						transform: "translateY(0%)",
						backgroundColor: "opacity-100",
					},
				},
				wiggle: {
					"0%, 25%, 50%, 75%, 100%": {
						transform: "translateX(0%)",
					},
					"12.5%, 62.5": {
						transform: "translateX(-25%)",
					},
					"37.5%, 87.5%": {
						transform: "translateX(25%)",
					},
				},
			},
			animation: {
				slideVertical:
					"slideVertical 0.5s cubic-bezier(0.4, 0, 0.6, 1)",
				wiggle: "wiggle 0.2s cubic-bezier(0.4, 0, 0.6, 1)",
			},
			borderRadius: {
				lg: "var(--radius)",
				md: "calc(var(--radius) - 2px)",
				sm: "calc(var(--radius) - 4px)",
			},
			colors: {},
		},
	},
	darkMode: ["class"],
	plugins: [require("tailwindcss-animate")],
};
