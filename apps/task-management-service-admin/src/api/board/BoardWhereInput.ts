import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";

export type BoardWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  project?: ProjectWhereUniqueInput;
  tasks?: TaskListRelationFilter;
};
