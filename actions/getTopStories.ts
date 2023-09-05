export const getStory = async (id: number) => {
  const res = await fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
  return await res.json();
};

export const getStories = async () => {
  const stories = await Promise.all(topStoriesIds.slice(0, 20).map(getStory));
  return stories;
};

export const getTopStoryIds = async () => {
  const res = await fetch("https://hacker-news.firebaseio.com/v0/topstories.json", { cache: "no-store" });
  return await res.json();
};
