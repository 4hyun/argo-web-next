module.exports = {
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}", "./public/styles/**/*.{css,scss}"],
  theme: {
    fontFamily: { poppins: ["Poppins", "sans-serif"], post: ["Noto Sans KR", "sans-serif"] },
    extend: {
      colors: {
        "argo-lemon": {
          400: "#FFF3CF",
          300: "#FFF5D9",
          200: "#FFF8E2",
          100: "#FFFAEC",
        },
        "argo-coral": {
          400: "#FFD9C2",
          300: "#FFE1CE",
          200: "#FFE8DA",
          100: "#FFF0E6",
        },
        "argo-pink": {
          400: "#F4D0D4",
          300: "#F6D9DC",
          200: "#F9E3E5",
          100: "#FBECEE",
        },
        "argo-lavender": {
          400: "#CAC7FF",
          300: "#D5D2FF",
          200: "#E0DDFF",
          100: "#EAE8FF",
        },
        "argo-blue": {
          50: "#d8defd",
          400: "#0a29ca",
          500: "#0300FF",
          600: "#1E0AD4",
          700: "#250FAB",
        },
        "tyk-green": "rgba(5, 217, 187, 1)",
        white: "#fff",
        "off-white": "#faf9f9",
      },
      boxShadow: {
        DEFAULT: "0 1px 4px rgb(26 26 67 / 10%)",
        lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 0px 6px -2px rgba(0, 0, 0, 0.05)",
      },
      borderColor: (theme) => ({
        ...theme("colors"),
      }),
      inset: {
        "1/5": "20%",
        "2/5": "40%",
      },
    },
  },
  variants: {
    extend: {
      // ...
      borderWidth: ["hover", "focus"],
      translate: ["active", "group-hover"],
    },
  },
}
