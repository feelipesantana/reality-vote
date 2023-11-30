import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation:{
        tilt: 'tilt 10s infinite linear'
      },
      keyframes:{
        tilt:{
          "0%, 50%, 100%":{
            transform: "rotate(0deg)"
          },
          "25%":{
            transform: "rotate(1deg)"
          },
          "75%":{
            transform: "rotate(-1deg)"
          },
          
        }
      }
    },
  },
  plugins: [],
}
export default config
