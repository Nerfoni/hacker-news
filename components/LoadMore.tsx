"use client";

import { Story } from "@/types";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { Spinner } from "./spinner/Spinner";
import { getStories } from "@/actions/stories";
import { Stories } from "./stories/Stories";

export const LoadMore = ({ storyIds, maxStories }: { storyIds: number[]; maxStories: number }) => {
  const [stories, setStories] = useState<Story[]>([]);
  const [pagesLoaded, setPagesLoaded] = useState(1);

  const { ref, inView } = useInView();

  const loadMoreStories = async () => {
    const nextPage = pagesLoaded + 1;
    const newStories = (await getStories(storyIds.slice(pagesLoaded * maxStories, nextPage * maxStories))) ?? [];
    setStories((prevStories: Story[]) => [...prevStories, ...newStories]);
    setPagesLoaded(nextPage);
  };

  useEffect(() => {
    if (inView) {
      loadMoreStories();
    }
  }, [inView]);

  return (
    // Stupid last minute hack
    <div className="mt-8">
      <Stories stories={stories} maxStories={20} />
      <div className="col-span-2 flex items-center justify-center p-4" ref={ref}>
        <Spinner />
      </div>
    </div>
  );
};
