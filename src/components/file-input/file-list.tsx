"use client";

import { useFileInput } from ".";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { FileListItem } from "./file-list-item";

export const FileList = () => {
  const { files } = useFileInput();
  const [parent] = useAutoAnimate({});

  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map((file) => (
        <FileListItem
          key={file.name}
          name={file.name}
          size={file.size}
          state="error"
        />
      ))}
    </div>
  );
};
