module.exports = {
  theme: {
    colors: {
      homebuttonhoverborder: "#0500FF",
    },
    borderColor: (theme) => ({
      ...theme("colors"),
    }),
  },
  variants: {
    extend: {
      // ...
      borderWidth: ["hover", "focus"],
      translate: ["active", "group-hover"],
    },
  },
};
