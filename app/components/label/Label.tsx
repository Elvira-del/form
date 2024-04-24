import { ReactNode } from "react";
import styles from "./label.module.css";
import classNames from "classnames/bind";

type LabelType = {
  labelText: string;
  checkboxType?: boolean;
  children: ReactNode;
};

export const Label = ({
  labelText,
  checkboxType,
  children,
  ...rest
}: LabelType) => {
  const classes = classNames.bind(styles);

  return (
    <label className={classes("label", { checkbox: checkboxType })} {...rest}>
      <span className={classes("text", { "checkbox-text": checkboxType })}>
        {labelText}
      </span>
      {children}
    </label>
  );
};
