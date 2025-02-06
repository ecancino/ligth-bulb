import { forwardRef } from "react";

import { button } from "./styles.css";

const Button = forwardRef<
  React.ElementRef<"button">,
  React.ComponentPropsWithoutRef<"button">
>((props, forwardedRef) => {
  return <button {...props} className={button} ref={forwardedRef} />;
});

Button.displayName = "Button";

export default Button;
