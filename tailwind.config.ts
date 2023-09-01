import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './Components/*.{js,ts,jsx,tsx,mdx}',
    './app/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        pal: {
          darkblue: '#023047',
          medblue: '#219ebc',
          lightblue: '#8ecae6',
          lightaccent: '#ffb703',
          darkaccent: '#fb8500'
        },
      },
    },
  },
  plugins: [],
}
export default config
