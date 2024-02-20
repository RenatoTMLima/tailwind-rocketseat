"use client";

import { Trash2, UploadCloud } from "lucide-react";
import { useFileInput } from ".";
import { formatBytes } from "@/utils/format-bytes";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export const FileList = () => {
  const { files } = useFileInput();
  const [parent] = useAutoAnimate({});

  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map((file) => (
        <div
          key={file.name}
          className="group flex items-start gap-4 rounded-lg border border-zinc-200 p-4"
        >
          <div className="rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600">
            <UploadCloud className="h-4 w-4" />
          </div>

          <div className="flex flex-1 flex-col items-start gap-1">
            <div className="flex flex-col">
              <h6 className="text-sm font-medium text-zinc-700">{file.name}</h6>
              <span className="text-sm text-zinc-500">
                {formatBytes(file.size)}
              </span>
            </div>

            <div className="flex w-full items-center gap-3">
              <div className="h-2 flex-1 rounded-full bg-zinc-100">
                <div className="h-2 rounded-full bg-violet-600 w-4/5" />
              </div>
              <span className="text-sm font-medium text-zinc-700">80%</span>
            </div>
          </div>
          <button
            type="button"
            className="ml-auto p-2 hover:bg-zinc-100 rounded-md"
          >
            <Trash2 className="w-5 h-5 text-zinc-500" />
          </button>
        </div>
      ))}
    </div>
  );
};
