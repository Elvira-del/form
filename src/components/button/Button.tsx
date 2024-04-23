"use client";

import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";
import classNames from "classnames/bind";
import { Icon } from "./icon/Icon";
import styles from "./button.module.css";
import { useFormStatus } from "react-dom";

type ButtonType = {
  btnType: "button" | "submit" | "reset";
  btnAction: "primary" | "secondary" | "social";
  handleClick?: MouseEventHandler;
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  btnType,
  btnAction,
  handleClick,
  children,
  ...rest
}: ButtonType) => {
  const { pending } = useFormStatus();
  const btnClass = classNames.bind(styles);

  return (
    <button
      className={btnClass("button", [btnAction])}
      type={btnType}
      onClick={handleClick}
      disabled={btnType === "submit" && pending}
      aria-disabled={btnType === "submit" && pending}
      {...rest}
    >
      {btnAction === "social" && <Icon id={"google"} />}
      <span>{children}</span>
    </button>
  );
};
