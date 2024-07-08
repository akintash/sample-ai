import { Board } from "../board/Board";
import { Project } from "../project/Project";

export type Task = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  status?: "Option1" | null;
  dueDate: Date | null;
  title: string | null;
  priority?: "Option1" | null;
  assignee: string | null;
  board?: Board | null;
  project?: Project | null;
};
