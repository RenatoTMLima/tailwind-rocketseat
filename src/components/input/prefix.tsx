import { ComponentProps } from "react";

export type PrefixProps = ComponentProps<"div">;

export const Prefix = (props: PrefixProps) => {
  return <div {...props} />;
};
