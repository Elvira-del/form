import { FormHTMLAttributes, ReactNode } from "react";
import styles from "./form.module.css";

type FormType = {
  formAction?: string | ((formData: FormData) => void) | undefined;
  children: ReactNode;
} & FormHTMLAttributes<HTMLFormElement>;

export const Form = ({ formAction, children }: FormType) => {
  return (
    <form className={styles.form} action={formAction} autoComplete="on">
      {children}
    </form>
  );
};
