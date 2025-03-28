import React from "react";
import clsx from "clsx";
import { Headings } from "../../../utils/types";
import * as styles from "./section.module.scss";

type TitleProps = {
  as?: Headings;
} & React.ComponentProps<Headings>;

export function Title({ as, className, children, ...props }: TitleProps) {
  const Comp = as ?? "h2";
  return (
    <Comp className={clsx(styles.sectionTitle, className)} {...props}>
      {children}
    </Comp>
  );
}
