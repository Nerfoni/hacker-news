"use client";

import { Story } from "@/types";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export const Stories = ({ stories, maxStories = 0 }: { stories: Story[]; maxStories?: number }) => {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      {stories?.map((story: Story, index) => (
        <div
          key={story.id}
          className="flex w-full flex-col justify-between rounded-lg bg-card p-8 transition-colors duration-200 ease-in-out"
        >
          <h2 className="mb-6 inline text-2xl font-bold tracking-tight sm:text-3xl">{`${index + 1 + maxStories}.`}</h2>
          <h3 className="mb-6 inline text-xl font-bold sm:text-2xl">{story.title}</h3>

          <div className="flex flex-col items-end justify-between gap-5 sm:flex-row">
            <p className="self-start sm:mb-0 sm:self-auto">by {story.by}</p>
            <Link href={`story/${story.id}`} className={buttonVariants({ variant: "outline" })}>
              Read more
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
