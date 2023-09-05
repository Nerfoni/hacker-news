import ColorModeButton from "@/components/ColorMode";
import { buttonVariants } from "@/components/ui/button";
import { Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white dark:bg-black">
      <div style={{ marginLeft: "auto", marginRight: "auto" }} className="flex h-14 max-w-7xl items-center">
        <p className="mr-4">Hacker News</p>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
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
