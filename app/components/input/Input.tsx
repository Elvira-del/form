import { HTMLInputTypeAttribute, InputHTMLAttributes } from "react";
import classNames from "classnames/bind";
import styles from "./input.module.css";

type InputType = {
  inputType: HTMLInputTypeAttribute;
  inputName: string;
  inputText?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  inputType,
  inputName,
  inputText,
  ...rest
}: InputType) => {
  const classes = classNames.bind(styles);

  return (
    <input
      className={classes("input", `input-${[inputName]}`)}
      type={inputType}
      inputMode={inputType === "email" ? "email" : "text"}
      name={inputName}
      placeholder={inputText}
      {...rest}
    />
  );
};
