import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        "58px": "58px",
      },
      fontSize: {
        "19px": "19px",
      },
      lineHeight: {
        "25.65px": "25.65px",
      },
      borderRadius: {
        "10px": "10px",
      },
      colors: {
        "gray-250": "#f7f7f7",
        "gray-350": "#969191",
        "blue-custom": "#001eb9",
        "text-primary": "#162427",
        "green-online": "#3df265",
      },
      fontFamily: {
        "satoshi-400": ["Satoshi-Regular", "sans-serif"],
        "satoshi-500": ["Satoshi-Medium", "sans-serif"],
        "satoshi-700": ["Satoshi-Bold", "sans-serif"],
        "satoshi-900": ["Satoshi-Black", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
