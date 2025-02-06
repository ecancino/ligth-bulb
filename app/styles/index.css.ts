import { style } from "@vanilla-extract/css";

export const app = style({
  display: "flex",
  backgroundColor: "#ddd",
  justifyContent: "space-around",
  height: "90vh",
  margin: 0,
  padding: "1rem",
});

export const lightBulb = style({
  width: "80%",
  //   border: "1px solid red",
});

export const controls = style({
  display: "flex",
  flexFlow: "column nowrap",
  //   border: "1px solid green",
});
