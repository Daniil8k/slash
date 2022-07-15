/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				background: {
					DEFAULT: "var(--color-background)",
				},
				primary: {
					dark: "var(--color-primary-dark)",
					DEFAULT: "var(--color-primary)",
					light: "var(--color-primary-light)",
				},
				card: {
					dark: "var(--color-card-dark)",
					DEFAULT: "var(--color-card)",
					light: "var(--color-card-light)",
				},
				neutral: {
					DEFAULT: "var(--color-neutral)",
					light: "var(--color-neutral-light)",
				},
				text: {
					DEFAULT: "var(--color-text)",
				},
				light: {
					DEFAULT: "var(--color-light)",
				},
				dark: {
					DEFAULT: "var(--color-dark)",
				},
				danger: {
					DEFAULT: "var(--color-danger)",
				},
				warning: {
					DEFAULT: "var(--color-warning)",
				},
			},
			fontSize: {
				"tiny": "0.625rem",
			},
		},
	},
	plugins: [],
};
