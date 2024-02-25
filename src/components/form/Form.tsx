import { ReactNode } from "react";
import styles from "./form.module.css";

type FormType = {
  children: ReactNode;
};

export const Form = ({ children }: FormType) => {
  return (
    <form className={styles.form} action="#" autoComplete="on">
      {children}
    </form>
  );
};
