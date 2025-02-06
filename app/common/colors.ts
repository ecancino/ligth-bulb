export const colors = [
  "#CD5C5C",
  "#d67ab1",
  "#0000FF",
  "#FA8072",
  "#E9967A",
  "#FFA07A",
  "#808080",
  "#FF0000",
  "#800000",
  "#FFFF00",
  "#808000",
  "#00FF00",
  "#008000",
  "#00FFFF",
  "#F08080",
  "#008080",
  "#000080",
  "#FF00FF",
  "#800080",
  "#a8dcd9",
  "#a2d67a",
];

export function lighten(color = "#004488", opacity = 1) {
  // Convert to color channels
  const num = parseInt(color.slice(1), 16);
  let R = num >> 16,
    G = (num >> 8) & 0x00ff,
    B = num & 0x0000ff;

  // Interpolate channel
  opacity = Math.min(Math.max(opacity, 0), 1);
  R = Math.round(R + (1 - opacity) * (255 - R));
  G = Math.round(G + (1 - opacity) * (255 - G));
  B = Math.round(B + (1 - opacity) * (255 - B));

  // Encode as hex
  return (
    "#" +
    (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 1 ? 0 : B) : 255)
    )
      .toString(16)
      .slice(1)
  );
}
