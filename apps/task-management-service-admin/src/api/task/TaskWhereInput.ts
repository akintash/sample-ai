import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { BoardWhereUniqueInput } from "../board/BoardWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type TaskWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  status?: "Option1";
  dueDate?: DateTimeNullableFilter;
  title?: StringNullableFilter;
  priority?: "Option1";
  assignee?: StringNullableFilter;
  board?: BoardWhereUniqueInput;
  project?: ProjectWhereUniqueInput;
};
