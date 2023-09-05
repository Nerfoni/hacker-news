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
