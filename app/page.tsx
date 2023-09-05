import { LoadMore } from "@/components/LoadMore";
import { Stories } from "@/components/Stories";
import { getStories, getTopStoryIds } from "@/actions/stories";

const Home = async () => {
  const MAX_STORIES = 20;
  const storyIds = await getTopStoryIds();
  const stories = await getStories(storyIds.slice(0, MAX_STORIES));

  return (
    <section className="projects w-full max-w-7xl">
      <h1 className="w-full pb-20 pt-10 text-left text-5xl font-extrabold md:text-8xl">Top Stories</h1>
      <Stories stories={stories} />
      <LoadMore storyIds={storyIds} maxStories={MAX_STORIES} />
    </section>
  );
};

export default Home;
