import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { TaskUpdateManyWithoutBoardsInput } from "./TaskUpdateManyWithoutBoardsInput";

export type BoardUpdateInput = {
  name?: string | null;
  description?: string | null;
  project?: ProjectWhereUniqueInput | null;
  tasks?: TaskUpdateManyWithoutBoardsInput;
};
