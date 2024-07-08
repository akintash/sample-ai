import { BoardCreateNestedManyWithoutProjectsInput } from "./BoardCreateNestedManyWithoutProjectsInput";
import { TaskCreateNestedManyWithoutProjectsInput } from "./TaskCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  name?: string | null;
  description?: string | null;
  boards?: BoardCreateNestedManyWithoutProjectsInput;
  tasks?: TaskCreateNestedManyWithoutProjectsInput;
};
