"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Loader2, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";

const ColorModeButton = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted)
    return (
      <Button disabled={!mounted} variant="ghost">
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      </Button>
    );

  return (
    <Button
      disabled={!mounted}
      variant="ghost"
      className=""
      onClick={() => (theme === "dark" ? setTheme("light") : setTheme("dark"))}
    >
      {theme === "dark" ? <Moon /> : <Sun />}
    </Button>
  );
};

export default ColorModeButton;
