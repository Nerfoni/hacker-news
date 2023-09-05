"use server";

import { Story } from "../types";
import axios from "axios";

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
