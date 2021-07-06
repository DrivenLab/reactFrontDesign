/**
 *
 * @param {Number} r shadow radius
 * @param {Number} o opacity (0 - 1)
 * @param {Number} w offset width
 * @param {Number} h offset height
 * @param {String} c color
 * @param {Number} e Elevation
 */
const shadow = (r, o = 0.25, w = 0, h = 0, c = "#000", e = 5) => {
  return {
    shadowColor: c,
    shadowOffset: {
      width: w,
      height: h
    },
    shadowOpacity: o,
    shadowRadius: r,
    elevation: e
  };
};

const inputStyle = (center = false, letterSpacing = 2, ph = 20) => {
  return {
    height: 53,
    margin: 12,
    borderWidth: 1,
    borderColor: "#ddd",
    width: "100%",
    borderRadius: 10,
    paddingHorizontal: ph,
    fontSize: 18,
    textAlign: center ? "center" : "",
    letterSpacing,
    backgroundColor: "#fff",
    ...shadow(15, 0.4)
  };
};

const flex = (direction = "row", strProps, props) => {
  let justifyContent = "";
  let alignItems = "";
  if (strProps) {
    const listProps = strProps.split(" ");
    justifyContent = listProps.includes("justify-center")
      ? "center"
      : listProps.includes("justify-end")
      ? "end"
      : listProps.includes("justify-between")
      ? "between"
      : listProps.includes("justify-arround")
      ? "arround"
      : "";
    alignItems = listProps.includes("items-center")
      ? "center"
      : listProps.includes("items-end")
      ? "end"
      : "";
    if (listProps.includes("center")) justifyContent = alignItems = "center";
  }

  return {
    ...props,
    display: "flex",
    flexDirection: direction,
    justifyContent,
    alignItems
  };
};

export { shadow, inputStyle, flex };
