import { SettingsTabs } from "@/components/settings-tabs";
import * as Input from "@/components/input";
import { Bold, Italic, Link, List, ListOrdered, Mail } from "lucide-react";
import * as FileInput from "@/components/file-input";
import { Select, SelectItem } from "@/components/select";
import { TextArea } from "@/components/textarea";
import { Button } from "@/components/button";

export default function Home() {
  return (
    <>
      <h1 className="text-3xl text-zinc-900 font-medium dark:text-zinc-100">
        Settings
      </h1>

      <SettingsTabs />

      <div className="mt-6 flex flex-col">
        <div className="flex justify-between lg:items-center gap-4 border-b border-zinc-200 dark:border-zinc-700 pb-5 flex-col lg:flex-row">
          <div className="space-y-1">
            <h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">
              Personal info
            </h2>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Update your photo and personal details here.
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit" form="settings">
              Save
            </Button>
          </div>
        </div>

        <form
          action=""
          id="settings"
          className="mt-6 flex flex-col w-full gap-6 divide-y divide-zinc-200 dark:divide-zinc-700"
        >
          <div className="flex flex-col lg:grid gap-3 lg:grid-cols-form">
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Name
            </label>
            <div className="flex flex-col lg:grid gap-6 lg:grid-cols-2">
              <Input.Root>
                <Input.Control id="firstName" defaultValue="Renato" />
              </Input.Root>
              <div className="flex flex-col gap-3">
                <label
                  htmlFor="lastName"
                  className="text-sm font-medium text-zinc-700 dark:text-zinc-300 lg:sr-only"
                >
                  Last name
                </label>
                <Input.Root>
                  <Input.Control id="lastName" defaultValue="Lima" />
                </Input.Root>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:grid gap-3 lg:grid-cols-form pt-5">
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Email address
            </label>
            <Input.Root>
              <Input.Prefix>
                <Mail className="h-5 w-5 text-zinc-500" />
              </Input.Prefix>
              <Input.Control
                id="email"
                type="email"
                defaultValue="renato.matura@gmail.com"
              />
            </Input.Root>
          </div>

          <div className="flex flex-col lg:grid gap-3 lg:grid-cols-form pt-5">
            <label
              htmlFor="photo"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Your photo
              <span className="text-sm font-normal text-zinc-500 block mt-0.5">
                This will be displayed on your profile
              </span>
            </label>
            <FileInput.Root className="flex flex-col lg:flex-row lg:items-start gap-5">
              <FileInput.ImagePreview />
              <FileInput.Trigger htmlFor="photo" />
              <FileInput.Control id="photo" />
            </FileInput.Root>
          </div>

          <div className="flex flex-col lg:grid gap-3 lg:grid-cols-form pt-5">
            <label
              htmlFor="role"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Role
            </label>
            <Input.Root>
              <Input.Control id="role" defaultValue="CTO" />
            </Input.Root>
          </div>

          <div className="flex flex-col lg:grid gap-3 lg:grid-cols-form pt-5">
            <label
              htmlFor="country"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Country
            </label>
            <Select placeholder="Select a country...">
              <SelectItem value="ca" text="Canada" />
              <SelectItem value="us" text="United States" />
            </Select>
          </div>

          <div className="flex flex-col lg:grid gap-3 lg:grid-cols-form pt-5">
            <label
              htmlFor="timezone"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Timezone
            </label>
            <Select placeholder="Select a timezone...">
              <SelectItem value="est" text="EST - Eastern Time" />
              <SelectItem value="cst" text="CST - Central Time" />
            </Select>
          </div>

          <div className="flex flex-col lg:grid gap-3 lg:grid-cols-form pt-5">
            <label
              htmlFor="bio"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Bio
              <span className="text-sm font-normal text-zinc-500 block mt-0.5">
                Write a short introduction
              </span>
            </label>
            <div className="space-y-3">
              <div className="flex flex-col lg:grid gap-3 lg:grid-cols-2">
                <Select placeholder="" defaultValue="normal">
                  <SelectItem value="normal" text="Normal text" />
                  <SelectItem value="markdown" text="Markdown" />
                </Select>
                <div className="flex items-center gap-1">
                  <Button type="button" variant="ghost">
                    <Bold className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Italic className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <Link className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <List className="w-4 h-4 text-zinc-500" strokeWidth={3} />
                  </Button>
                  <Button type="button" variant="ghost">
                    <ListOrdered
                      className="w-4 h-4 text-zinc-500"
                      strokeWidth={3}
                    />
                  </Button>
                </div>
              </div>

              <TextArea
                id="bio"
                defaultValue="I'm a software developer based in Ontario, Canada. I'm specialized in..."
              />
            </div>
          </div>

          <div className="flex flex-col lg:grid gap-3 lg:grid-cols-form pt-5">
            <label
              htmlFor="portfolio-projects"
              className="text-sm font-medium text-zinc-700 dark:text-zinc-300"
            >
              Portfolio projects
              <span className="text-sm font-normal text-zinc-500 block mt-0.5">
                Share a few snippets of your work
              </span>
            </label>
            <FileInput.Root>
              <FileInput.Trigger htmlFor="portfolio-projects" />
              <FileInput.FileList />
              <FileInput.Control id="portfolio-projects" multiple />
            </FileInput.Root>
          </div>

          <div className="flex items-center justify-end gap-2 pt-5">
            <Button type="button" variant="outline">
              Cancel
            </Button>
            <Button type="submit" form="settings">
              Save
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
