import { Board } from "../board/Board";
import { Task } from "../task/Task";

export type Project = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  boards?: Array<Board>;
  tasks?: Array<Task>;
};
