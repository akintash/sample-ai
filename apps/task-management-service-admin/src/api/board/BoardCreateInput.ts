import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { TaskCreateNestedManyWithoutBoardsInput } from "./TaskCreateNestedManyWithoutBoardsInput";

export type BoardCreateInput = {
  name?: string | null;
  description?: string | null;
  project?: ProjectWhereUniqueInput | null;
  tasks?: TaskCreateNestedManyWithoutBoardsInput;
};
