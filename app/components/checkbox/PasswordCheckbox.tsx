import { InputHTMLAttributes } from "react";
import styles from "./checkbox.module.css";

type PasswordCheckboxType = {
  toggleCheckbox: (isChecked: boolean) => void;
} & InputHTMLAttributes<HTMLInputElement>;

export const PasswordCheckbox = ({ toggleCheckbox }: PasswordCheckboxType) => {
  return (
    <input
      className={styles.checkbox}
      type="checkbox"
      name="checkbox"
      onChange={(e) => toggleCheckbox(e.target.checked)}
    />
  );
};
