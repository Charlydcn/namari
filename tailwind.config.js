/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            gold: ({ opacityVariable, opacityValue }) => {
              if (opacityValue !== undefined) {
                return `rgba(var(--gold), ${opacityValue})`;
              }
              if (opacityVariable !== undefined) {
                return `rgba(var(--gold), var(${opacityVariable}, 1))`;
              }
              return `rgb(var(--gold))`;
            },
  
            // jaune: ({ opacityVariable, opacityValue }) => {
            //   if (opacityValue !== undefined) {
            //     return `rgba(var(--jaune), ${opacityValue})`;
            //   }
            //   if (opacityVariable !== undefined) {
            //     return `rgba(var(--jaune), var(${opacityVariable}, 1))`;
            //   }
            //   return `rgb(var(--jaune))`;
            // },
          },
          backgroundImage: {
              'header-img': "url('/img/header-img.jpg')",
          }
    },
  },
  plugins: [],
}

