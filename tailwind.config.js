const colors = require("tailwindcss/colors");

module.exports = {
  plugins: [
    require("tw-elements/dist/plugin"),
    require("@tailwindcss/aspect-ratio"),
  ],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        "[auto,auto,1fr]": "auto auto 1fr",
      },
      height: {
        rem26: "26rem",
        dialog: "32rem",
        rem33: "33rem",

        carousel: "38rem",
      },
      width: {
        carousel: "50rem",
      },
      fontFamily: {
        mainFont: ["LaleZar"],
      },
      fontSize: {
        "10xl": "14rem",
      },
    },

    screens: {
      xs: { max: "767px" },
      sm: { min: "768px", max: "991px" },
      md: { min: "992px", max: "1199px" },
      lg: { min: "1200px" },
    },
    colors: {
      // Build your palette here
      transparent: "transparent",
      current: "currentColor",
      mainPurple: "#6A4C93",
      mainPink: "#FF595E",
      mainYellow: "#FFCA3A",
      mainBlue: "#1982C4",
      mainGreen: "#8AC926",
      darkPurple: "#240046",
      goldie: "#ff9e00",
      white: colors.white,
      black: colors.black,
      gray: colors.neutral,
      LightBlue: colors.sky,
      red: colors.red,
      blue: colors.blue,
      yellow: colors.yellow,
      blueGray: colors.slate,
      Lime: colors.lime,
      CoolGray: colors.gray,
      Fuchsia: colors.fuchsia,
      purple: colors.purple,
      green: colors.green,
      pink: colors.pink,
      Rose: colors.rose,
      Indigo: colors.indigo,
      Amber: colors.amber,
      Cyan: colors.cyan,
      Emerald: colors.emerald,
      Sky: colors.sky,
    },
  },

  variants: {
    extend: {},
  },
  // plugins: [require("daisyui")],
};
