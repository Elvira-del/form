import { ReactNode } from "react";
import styles from "./background.module.css";

type BackgroundType = {
  children: ReactNode;
};

export const Background = ({ children }: BackgroundType) => {
  return (
    <div className={styles.background}>
      <div className={styles.circle1}></div>
      <div className={styles.circle2}></div>

      <div className={styles.formWrapper}>{children}</div>
    </div>
  );
};
