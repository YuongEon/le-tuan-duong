/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				main: '#433D8B',
				bg: '#17153B',
				'main-light': '#ECC8FF',
				'main-dark': '#2E236C',
			},
			keyframes: {
        suspend: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(20px)' },
        }
      },
			animation: {
        'suspend': 'suspend 2s ease-in-out infinite',
			},
		},
	},
	plugins: [],
}
