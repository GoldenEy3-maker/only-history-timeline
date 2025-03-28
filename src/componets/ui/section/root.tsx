import React from "react";
import clsx from "clsx";
import * as styles from "./section.module.scss";

type RootProps = {} & React.ComponentProps<"section">;

export function Root({ className, children, ...props }: RootProps) {
  return (
    <section className={clsx(styles.section, className)} {...props}>
      {children}
    </section>
  );
}
