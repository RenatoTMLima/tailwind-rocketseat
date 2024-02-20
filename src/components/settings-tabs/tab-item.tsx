"use client";

import * as Tabs from "@radix-ui/react-tabs";
import { motion } from "framer-motion";

export type TabItemProps = {
  value: string;
  title: string;
  isSelected?: boolean;
};

export const TabItem = (props: TabItemProps) => {
  const { value, title, isSelected = false } = props;

  return (
    <Tabs.Trigger
      value={value}
      className="relative px-1 pb-4 text-sm font-medium text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700 outline-none group"
    >
      <span className="group-focus-visible:ring-2 group-focus-visible:ring-violet-400 rounded group-focus-visible:ring-offset-4">
        {title}
      </span>

      {isSelected ? (
        <motion.div
          layoutId="activeTab"
          className="absolute left-0 right-0 -bottom-px h-0.5 bg-violet-700"
        />
      ) : null}
    </Tabs.Trigger>
  );
};
