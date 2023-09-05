import { buttonVariants } from "@/components/ui/button";
import { getStory } from "@/lib/api";
import { format } from "date-fns";
import { ChevronLeft, Link as LucideLink } from "lucide-react";
import Link from "next/link";

const Story = async ({ params }: { params: { id: number } }) => {
  const story = await getStory(params.id);
  const date = format(new Date(story.time * 1000), "MMMM d yyyy, HH:mm");

  return (
    <section className="projects w-full max-w-7xl">
      <Link href={"/"} className={buttonVariants({ variant: "outline" })}>
        <ChevronLeft className="mr-2 h-4 w-4" />
        Go back
      </Link>
      <h1 className="mb-10 mt-10 w-full text-left text-4xl font-extrabold md:text-5xl">{story.title}</h1>

      <div className="flex flex-col items-end justify-between gap-5 sm:flex-row">
        <div className="self-start sm:mb-0 sm:self-auto">
          <p>{date}</p>
          <p>by {story.by}</p>
        </div>
        <Link
          href={story.url || `https://news.ycombinator.com/item?id=${story.id}`}
          className={buttonVariants({ variant: "default" })}
          target="_blank"
        >
          <LucideLink className="mr-2 h-4 w-4" />
          Read more
        </Link>
      </div>
    </section>
  );
};

export default Story;
