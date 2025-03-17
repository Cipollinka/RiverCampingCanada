/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './App.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/screens/**/*.{js,jsx,ts,tsx}',
    './src/navigation/**/*.{js,jsx,ts,tsx}',
  ],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        primary: '#1F1F2D',
        secondary: '#13131F',
        tertiary: '#181825',
        action: '#FFED62',
        accent: '#BCBCFF',
        subText: '#C5C5C5',
      },
    },
  },
  plugins: [],
};
