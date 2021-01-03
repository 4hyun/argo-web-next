module.exports = {
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
