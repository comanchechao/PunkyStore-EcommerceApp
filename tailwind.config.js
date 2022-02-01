const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        rem26: "26rem",
        dialog: "32rem",
      },
      fontFamily: {
        mainFont: ["Estedad"],
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
      mainPurple: "#9B5DE5",
      mainPink: "#F15BB5",
      mainYellow: "#FEE440",
      mainBlue: "#00BBF9",
      mainGreen: "#00F5D4",
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
  plugins: [],
};
