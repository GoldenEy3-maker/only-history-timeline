import clsx from "clsx";

type RootProps = {} & React.ComponentProps<"section">;

export function Root({ className, children, ...props }: RootProps) {
  return (
    <section className={clsx("section", className)} {...props}>
      {children}
    </section>
  );
}
