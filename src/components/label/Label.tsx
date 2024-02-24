import { ReactNode } from "react";
import styles from "./label.module.css";

type LabelType = {
  labelText: string;
  children: ReactNode;
};

export const Label = ({ labelText, children, ...rest }: LabelType) => {
  return (
    <label className={styles.label} {...rest}>
      <span className={styles.text}>{labelText}</span>
      {children}
    </label>
  );
};
