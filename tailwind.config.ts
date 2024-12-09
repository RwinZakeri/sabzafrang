import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        textGary: "var(--text-gray)",
        textPurple: "var(--primatyPurple)",
        primaryGreen: "var(--primar-green)",
        primaryWhite: "var(--primay-white)",
      },
      backgroundImage: {
        'layer1': "url('/src/assets/images/aboutUs/Layer-1.png')",
        
      }
    },
  },
  plugins: [],
};
export default config;
