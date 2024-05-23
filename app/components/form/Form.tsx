import { FormHTMLAttributes, ReactNode } from "react";
import styles from "./form.module.css";

type FormType = {
  formAction: string | ((formData: FormData) => void) | undefined;
  children: ReactNode;
} & FormHTMLAttributes<HTMLFormElement>;

export const Form = ({ formAction, children }: FormType) => {
  return (
    <div className={styles.background}>
      <div className={styles.circle1}></div>
      <div className={styles.circle2}></div>

      <form className={styles.form} action={formAction} autoComplete="on">
        {children}
      </form>
    </div>
  );
};
