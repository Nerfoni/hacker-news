import { Stories } from "@/components/stories/Stories";
import { getStories, getTopStoryIds } from "@/lib/api";

const Home = async () => {
  const storyIds = await getTopStoryIds();
  const stories = await getStories(storyIds.slice(0, 20));

  return (
    <section className="projects w-full max-w-7xl">
      <h1 className="w-full pb-20 pt-10 text-left text-5xl font-extrabold md:text-8xl">Top Stories</h1>
      <Stories stories={stories} />
    </section>
  );
};

export default Home;
