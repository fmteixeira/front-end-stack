module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
    },
    colors: {
      transparent: "transparent",
      black: "var(--color-black)",
      dark: "var(--color-dark)",
      blue: "var(--color-blue)",
      pink: "var(--color-pink)",
      gray: "var(--color-gray)",
      white: {
        100: "var(--color-white-100)",
        200: "var(--color-white-200)",
        300: "var(--color-white-300)",
      },
    },
    gradientColorStops: (theme) => ({
      ...theme("colors"),
      "blue-start": "var(--blue-start)",
      "blue-end": "var(--blue-end)",
    }),
    fontFamily: {
      sans: ["Graphik", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },

      boxShadow: {
        buttonShadow: "0px 10px 15px rgba(0, 0, 0, 0.03), 0px 7px 25px rgba(42, 139, 242, 0.03), 0px 5px 25px rgba(42, 139, 242, 0.07)",
      }
    },
  },

  
  plugins: [require('@tailwindcss/line-clamp')],
};
