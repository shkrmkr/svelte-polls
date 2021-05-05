import { nanoid } from "nanoid";
import type { Poll } from "src/types";
import { writable } from "svelte/store";

export const pollStore = writable<Poll[]>([
  {
    id: nanoid(5),
    question: "TypeScript or JavaScript?",
    answerA: "TypeScript",
    answerB: "JavaScript",
    votesA: 100,
    votesB: 0,
  },
]);
