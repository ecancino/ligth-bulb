import { style } from "@vanilla-extract/css";

export const button = style({
  appearance: "button",
  backfaceVisibility: "hidden",
  backgroundColor: "#405cf5",
  borderRadius: "6px",
  borderWidth: "0",
  boxShadow:
    "rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0",
  boxSizing: "border-box",
  color: "#fff",
  cursor: "pointer",
  fontFamily:
    '-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
  fontSize: "100%",
  height: "44px",
  lineHeight: 1.15,
  margin: "12px 0 0",
  outline: "none",
  overflow: "hidden",
  padding: "0 25px",
  position: "relative",
  textAlign: "center",
  textTransform: "none",
  transform: "translateZ(0)",
  transition: "all .2s,box-shadow .08s ease-in",
  userSelect: "none",
  WebkitUserSelect: "none",
  touchAction: "manipulation",
  ":disabled": {
    cursor: "default",
    backgroundColor: "lightgray",
  },
  ":focus": {
    boxShadow:
      "rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .2) 0 6px 15px 0, rgba(0, 0, 0, .1) 0 2px 2px 0, rgba(50, 151, 211, .3) 0 0 0 4px",
  },
  ":hover": {
    backgroundColor: "#647af7",
  },
  selectors: {
    "&:hover:is(:disabled)": {
      backgroundColor: "lightgray",
    },
  },
});
