export interface Person {
  id: string;
  name: string;
  beltColor: string;
  age: number;
  skills: string[];
}

export interface PollFormFields {
  question: string;
  answerA: string;
  answerB: string;
}

export interface Poll extends PollFormFields {
  votesA: number;
  votesB: number;
  id: string;
}

export interface Vote {
  pollId: Poll["id"];
  option: "A" | "B";
}
