import { SVGProps } from "react";
import classNames from "classnames/bind";
import styles from "./icon.module.css";

type IconType = {
  id: string;
  iconType: "avatar" | "social";
} & SVGProps<SVGSVGElement>;

export const Icon = ({ id, iconType, ...rest }: IconType) => {
  const classes = classNames.bind(styles);

  return (
    <svg className={classes(iconType)} {...rest}>
      <use href={`/icons/sprite.svg#${id}`} />
    </svg>
  );
};
