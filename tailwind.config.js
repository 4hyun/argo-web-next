module.exports = {
  purge: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./public/styles/**/*.{css,scss}",
  ],
  theme: {
    extend: {
      colors: {
        "argo-blue": {
          400: "#0a29ca",
          500: "#0500FF",
          600: "#1E0AD4",
          700: "#250FAB",
        },
        white: "#fff",
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
};
