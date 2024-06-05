"use client";

import { ButtonHTMLAttributes, MouseEvent, ReactNode } from "react";
import { useFormStatus } from "react-dom";
import classNames from "classnames/bind";
import { Icon } from "../icon/Icon";
import styles from "./button.module.css";

type ButtonType = {
  btnType: "button" | "submit" | "reset";
  btnAction: "primary" | "secondary" | "social";
  socialType?: "github";
  children: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({
  btnType,
  btnAction,
  socialType,
  children,
  ...rest
}: ButtonType) => {
  const { pending } = useFormStatus();
  const classes = classNames.bind(styles);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (pending) {
      e.preventDefault();
    }
  };

  return (
    <button
      className={classes("button", [btnAction])}
      type={btnType}
      onClick={handleClick}
      disabled={btnType === "submit" && pending}
      aria-disabled={btnType === "submit" && pending}
      {...rest}
    >
      {socialType === "github" && <Icon id={"github"} iconType={"social"} />}
      <span>{children}</span>
    </button>
  );
};
