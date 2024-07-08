import { BoardWhereUniqueInput } from "../board/BoardWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskCreateInput = {
  description?: string | null;
  status?: "Option1" | null;
  dueDate?: Date | null;
  title?: string | null;
  priority?: "Option1" | null;
  assignee?: string | null;
  board?: BoardWhereUniqueInput | null;
  project?: ProjectWhereUniqueInput | null;
};
