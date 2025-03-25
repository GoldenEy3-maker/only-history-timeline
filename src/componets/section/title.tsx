import clsx from "clsx";
import { Headings } from "../../utils/types";

type TitleProps = {
  as?: Headings;
} & React.ComponentProps<Headings>;

export function Title({ as, className, children, ...props }: TitleProps) {
  const Comp = as ?? "h2";
  return (
    <Comp className={clsx("section__title", className)} {...props}>
      {children}
    </Comp>
  );
}
