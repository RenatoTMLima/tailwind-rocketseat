import { ComponentProps } from "react";

export type ControlProps = ComponentProps<"input">;

export const Control = (props: ControlProps) => {
  return (
    <input
      className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
      {...props}
    />
  );
};
