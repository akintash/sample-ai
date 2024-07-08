import { Project } from "../project/Project";
import { Task } from "../task/Task";

export type Board = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string | null;
  description: string | null;
  project?: Project | null;
  tasks?: Array<Task>;
};
