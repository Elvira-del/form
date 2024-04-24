import { SVGProps } from "react";
import styles from "./icon.module.css";

type IconType = {
  id: string;
} & SVGProps<SVGSVGElement>;

export const Icon = ({ id, ...rest }: IconType) => {
  return (
    <svg className={styles.icon} {...rest}>
      <use href={`/icons/sprite.svg#${id}`} />
    </svg>
  );
};
