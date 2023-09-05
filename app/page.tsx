"use client";

import { getTopStories } from "@/actions/getTopStories";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";

interface Story {
  by: string;
  descendants: number; // Number of comments or replies
  id: number;
  kids: number[]; // Array of comment IDs
  score: number;
  text: string;
  time: number;
  title: string;
  type: string;
}

const Home = () => {
  const { isLoading, error, data: stories } = useQuery<Story[]>({ queryKey: ["topStories"], queryFn: getTopStories });

  return (
    <main className="flex min-h-screen flex-col items-center px-10 py-20">
      <section className="projects w-full max-w-7xl">
        <h1 className="w-full pb-20 text-left text-5xl font-extrabold md:text-8xl">Top Stories</h1>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {stories?.map((story: Story, index) => (
            <div className="flex w-full flex-col justify-between rounded-lg bg-card p-8 transition-colors duration-200 ease-in-out">
              <h2 className="mb-6 inline text-3xl font-bold tracking-tight">{index + 1 + "."}</h2>
              <h2 className="mb-6 inline text-2xl font-bold">{story.title}</h2>

              <div className="flex items-center justify-between">
                <p>by {story.by}</p>
                <Button variant="outline">Read more</Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
