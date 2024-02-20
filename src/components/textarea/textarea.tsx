import { ComponentProps } from "react";

export type TextAreaProps = ComponentProps<"textarea">;

export const TextArea = (props: TextAreaProps) => {
  return (
    <textarea
      className="min-h-[120px] resize-y w-full rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-violet-300 focus:ring-2 focus:ring-violet-100"
      {...props}
    />
  );
};
