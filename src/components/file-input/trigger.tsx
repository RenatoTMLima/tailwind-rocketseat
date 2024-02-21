"use client";

import { UploadCloud } from "lucide-react";
import { ComponentProps } from "react";
import { useFileInput } from ".";
import { twMerge } from "tailwind-merge";

export type TriggerProps = ComponentProps<"label">;

export const Trigger = (props: TriggerProps) => {
  const { id } = useFileInput();

  return (
    <label
      htmlFor={id}
      className={twMerge(
        "group flex-1 cursor-pointer flex flex-col items-center gap-3 rounded-lg",
        "border border-zinc-300 px-6 py-4 text-center text-zinc-500 shadow-sm",
        "hover:border-violet-200 hover:bg-violet-25 hover:text-violet-500",
        "dark:border-zinc-800 dark:hover:border-zinc-700 dark:hover:bg-zinc-800 dark:hover:text-violet-300",
        props.className
      )}
      {...props}
    >
      <div
        className={twMerge(
          "rounded-full border-6 border-zinc-100 bg-zinc-200 p-2",
          "group-hover:border-violet-100 group-hover:bg-violet-200",
          "dark:border-zinc-700 dark:bg-zinc-800 dark:group-hover:border-zinc-600 dark:group-hover:bg-zinc-700"
        )}
      >
        <UploadCloud className="h-5 w-5 text-zinc-600 group-hover:text-violet-600 dark:text-zinc-500 dark:group-hover:text-violet-300" />
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-sm ">
          <span className="font-semibold text-violet-700 dark:text-violet-400">
            Click to upload
          </span>{" "}
          or drag and drop
        </span>
        <span className="text-xs">SVG, PNG, JPG or GIF (max. 800x400px)</span>
      </div>
    </label>
  );
};
