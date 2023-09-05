import axios from "axios";

export interface Story {
  by: string;
  descendants: number; // Number of comments or replies
  id: number;
  kids: number[]; // Array of comment IDs
  score: number;
  text: string;
  time: number;
  title: string;
  type: string;
  url?: string;
}

export const getTopStoryIds = async () => {
  const res = await axios.get<number[]>("https://hacker-news.firebaseio.com/v0/topstories.json");
  return res.data;
};

export const getStory = async (id: number) => {
  const res = await axios.get<Story>(`https://hacker-news.firebaseio.com/v0/item/${id}.json`);
  return res.data;
};

export const getStories = async (ids: number[]) => {
  const stories = await Promise.all(ids.map(getStory));
  return stories;
};
