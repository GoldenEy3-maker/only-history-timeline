import React, { forwardRef } from "react";
import * as styles from "./button.module.scss";
import { cva, VariantProps } from "class-variance-authority";

const buttonVarians = cva(styles.button, {
  variants: {
    variant: {
      default: styles.buttonDefault,
      outlined: styles.buttonOutlined,
    },
    size: {
      default: "",
      icon: styles.buttonIcon,
      "icon-sm": styles.buttonIconSm,
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type ButtonProps = {} & React.ComponentProps<"button"> &
  VariantProps<typeof buttonVarians>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonVarians({ className, size, variant })}
        {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
