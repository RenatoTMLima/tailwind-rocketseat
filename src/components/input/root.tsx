import { ComponentProps } from "react";

export type RootProps = ComponentProps<"div">;

export const Root = (props: RootProps) => {
  return (
    <div
      className="flex items-center w-full gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm focus-within:border-violet-300 focus-within:ring-2 focus-within:ring-violet-100"
      {...props}
    />
  );
};
