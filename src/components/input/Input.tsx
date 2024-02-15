import {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
} from "react";
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
  return (
    <input
      type={inputType}
      name={inputName}
      placeholder={inputText}
      onChange={handleChange}
      {...rest}
    />
  );
};
