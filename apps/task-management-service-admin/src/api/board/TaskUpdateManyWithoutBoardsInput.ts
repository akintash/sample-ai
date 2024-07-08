import { TaskWhereUniqueInput } from "../task/TaskWhereUniqueInput";

export type TaskUpdateManyWithoutBoardsInput = {
  connect?: Array<TaskWhereUniqueInput>;
  disconnect?: Array<TaskWhereUniqueInput>;
  set?: Array<TaskWhereUniqueInput>;
};
