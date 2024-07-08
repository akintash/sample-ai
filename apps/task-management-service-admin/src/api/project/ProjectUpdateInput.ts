import { BoardUpdateManyWithoutProjectsInput } from "./BoardUpdateManyWithoutProjectsInput";
import { TaskUpdateManyWithoutProjectsInput } from "./TaskUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  name?: string | null;
  description?: string | null;
  boards?: BoardUpdateManyWithoutProjectsInput;
  tasks?: TaskUpdateManyWithoutProjectsInput;
};
