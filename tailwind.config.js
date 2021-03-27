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
          400: "var(--argo-blue)",
          500: "#0500FF",
          600: "#1E0AD4",
          700: "#250FAB",
        },
        white: "#fff",
      },
      boxShadow: {
        DEFAULT: "0 1px 4px rgb(26 26 67 / 10%)",
        lg:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 0px 6px -2px rgba(0, 0, 0, 0.05)",
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
