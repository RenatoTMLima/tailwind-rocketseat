"use client";

import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from "react";

type FileInputContextType = {
  id: string;
  files: File[];
  onFilesSelected: (files: File[], multiple: boolean) => void;
  onFileDelete: (fileName: string) => void;
};

const FileInputContext = createContext({} as FileInputContextType);

export type RootProps = ComponentProps<"div">;

export const Root = (props: RootProps) => {
  const id = useId();
  const [files, setFiles] = useState<File[]>([]);

  const onFilesSelected = (files: File[], multiple: boolean) => {
    if (multiple) {
      setFiles((prev) => [...prev, ...files]);
    } else {
      setFiles(files);
    }
  };

  const onFileDelete = (filename: string) => {
    setFiles((prev) => prev.filter((file) => file.name != filename));
  };

  return (
    <FileInputContext.Provider
      value={{ id, files, onFilesSelected, onFileDelete }}
    >
      <div {...props} />
    </FileInputContext.Provider>
  );
};

export const useFileInput = () => useContext(FileInputContext);
