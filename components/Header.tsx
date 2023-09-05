import ColorModeButton from "@/components/ColorMode";
import { buttonVariants } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-background">
      <div className="mx-auto flex h-14 max-w-7xl items-center px-10 2xl:px-0">
        <Link href="/" className="mr-4 font-bold">
          Hacker News
        </Link>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <Link href="https://github.com/Nerfoni" className={buttonVariants({ variant: "ghost" })} target="_blank">
            <Github />
          </Link>
          <Link
            href="https://www.linkedin.com/in/sriikkila/"
            className={buttonVariants({ variant: "ghost" })}
            target="_blank"
          >
            <Linkedin />
          </Link>
          <ColorModeButton />
        </div>
      </div>
    </header>
  );
}
