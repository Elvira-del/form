import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";
import classNames from "classnames/bind";
import { Icon } from "./icon/Icon";
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
  const btnClass = classNames.bind(styles);

  return (
    <button
      className={btnClass("button", [btnAction])}
      type={btnType}
      onClick={handleClick}
      {...rest}
    >
      {btnAction === "social" && <Icon id={"google"} />}
      <span>{children}</span>
    </button>
  );
};
