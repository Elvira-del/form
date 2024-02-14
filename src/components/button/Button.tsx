import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";
import styles from "./button.module.css";

type ButtonType = {
  btnType: "button" | "submit" | "reset";
  btnAction: "primary" | "secondary" | "social";
  handleClick: MouseEventHandler;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  btnType,
  btnAction,
  handleClick,
  children,
  ...rest
}: ButtonType) => {
  return (
    <button type={btnType} onClick={handleClick} {...rest}>
      {children}
    </button>
  );
};
