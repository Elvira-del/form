import {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
} from "react";
import classNames from "classnames/bind";
import styles from "./input.module.css";

type InputType = {
  inputType: HTMLInputTypeAttribute;
  inputName: string;
  inputText: string;
  handleChange: ChangeEventHandler;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  inputType,
  inputName,
  inputText,
  handleChange,
  ...rest
}: InputType) => {
  const inputClass = classNames.bind(styles);

  return (
    <input
      className={inputClass("input", `input-${[inputName]}`)}
      type={inputType}
      name={inputName}
      placeholder={inputText}
      onChange={handleChange}
      {...rest}
    />
  );
};
