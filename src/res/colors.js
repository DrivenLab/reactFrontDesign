const colors = {
  primary: "#52AF32",
  secondary: "#000",
  accent: "#185702",
  back: "#000",
  white: "#fff",
  grey1: "#111",
  grey2: "#222",
  grey3: "#333",
  grey4: "#444",
  grey5: "#555",
  grey6: "#666",
  grey7: "#777",
  grey8: "#888",
  grey9: "#999",
  greyA: "#aaa",
  greyB: "#bbb",
  greyC: "#ccc",
  greyD: "#ddd",
  greyE: "#eee"
};

const bgColorsGen = () => {
  const _bgColors = {};
  Object.keys(colors).forEach((c) => {
    /** Ej.: bgPrimary: { backgroundColor: "#52AF32" } */
    // _bgColors["bg" + c[0].toUpperCase() + c.slice(1)] = {
    _bgColors[c] = {
      backgroundColor: colors[c]
    };
  });
  return _bgColors;
};
const bgColors = bgColorsGen();

const textColorsGen = () => {
  const _textColors = {};
  Object.keys(colors).forEach((c) => {
    /** Ej.: textPrimary: { color: "#52AF32" } */
    // _textColors["text" + c[0].toUpperCase() + c.slice(1)] = {
    _textColors[c] = {
      color: colors[c]
    };
  });
  return _textColors;
};
const textColors = textColorsGen();

// textColors.textPrimary

export { colors, bgColors, textColors };
