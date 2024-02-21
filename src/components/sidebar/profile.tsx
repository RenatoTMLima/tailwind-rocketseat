import { LogOut } from "lucide-react";
import { Button } from "../button";

export const Profile = () => {
  return (
    <div className="grid grid-cols-profile items-center gap-3 ">
      <img
        src="https://github.com/RenatoTMLima.png"
        alt="profile"
        className="w-10 h-10 rounded-full"
      />
      <div className="flex flex-col truncate">
        <span className="text-sm font-semibold text-zinc-700 truncate dark:text-zinc-100">
          Renato T M Lima
        </span>
        <span className="text-sm text-zinc-500 truncate dark:text-zinc-400">
          renato.matura@gmail.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="w-5 h-5 text-zinc-500" />
      </Button>
    </div>
  );
};
