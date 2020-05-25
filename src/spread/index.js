const css = { fontSize: 13, color: "#FFF" };

const titleCss = { fontweight: 'bold', ...css };

console.log(titleCss) // fontweight: "bold", fontSize: 13, color: "#FFF"

export const logSpread = () => console.log(titleCss);
