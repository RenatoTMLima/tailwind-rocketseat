import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

export type ControlProps = ComponentProps<"input">;

export const Control = (props: ControlProps) => {
  return (
    <input
      className={twMerge(
        "flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none",
        "dark:placeholder-zinc-400 dark:text-zinc-100",
        props.className
      )}
      {...props}
    />
  );
};
