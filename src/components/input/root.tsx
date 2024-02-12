import { ComponentProps } from "react";

export type RootProps = ComponentProps<"div">;

export const Root = (props: RootProps) => {
  return (
    <div
      className="flex items-center mx-1 w-full gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm"
      {...props}
    />
  );
};
