import { ReactNode } from "react";
import Link from "next/link";
import { Url } from "next/dist/shared/lib/router/router";
import styles from "./link.module.css";

type LinkType = {
  reference: Url;
  children: ReactNode;
};

export const LinkWrapper = ({ reference, children }: LinkType) => {
  return (
    <Link className={styles.link} href={reference}>
      {children}
    </Link>
  );
};
