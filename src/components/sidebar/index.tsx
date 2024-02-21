"use client";

import { Logo } from "./logo";
import {
  Search,
  Home,
  BarChart,
  SquareStack,
  CheckSquare,
  Flag,
  Users,
  LifeBuoy,
  Cog,
  Menu,
} from "lucide-react";
import { NavItem } from "./nav-item";
import { UsedSpaceWidget } from "./used-space-widget";
import { Profile } from "./profile";
import * as Input from "../input";
import * as Collapsible from "@radix-ui/react-collapsible";
import { Button } from "../button";

export const Sidebar = () => {
  return (
    <Collapsible.Root className="border-zinc-200 border-b flex flex-col gap-6 p-4 fixed left-0 top-0 right-0 data-[state=open]:bottom-0 z-20 bg-white dark:bg-zinc-900 dark:border-zinc-800 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:bottom-0">
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <Input.Root>
          <Input.Prefix>
            <Search className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control placeholder="Search" />
        </Input.Root>

        <nav className="space-y-0.5">
          <NavItem title="Home" icon={Home} />
          <NavItem title="Dashboard" icon={BarChart} />
          <NavItem title="Projects" icon={SquareStack} />
          <NavItem title="Tasks" icon={CheckSquare} />
          <NavItem title="Reporting" icon={Flag} />
          <NavItem title="Users" icon={Users} />
        </nav>

        <div className="mt-auto flex flex-col gap-6">
          <nav className="space-y-0.5">
            <NavItem title="Support" icon={LifeBuoy} />
            <NavItem title="Settings" icon={Cog} />
          </nav>

          <UsedSpaceWidget />

          <div className="h-px bg-zinc-200 dark:bg-zinc-700" />

          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};
