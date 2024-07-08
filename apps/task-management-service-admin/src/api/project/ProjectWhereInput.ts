import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BoardListRelationFilter } from "../board/BoardListRelationFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";

export type ProjectWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  description?: StringNullableFilter;
  boards?: BoardListRelationFilter;
  tasks?: TaskListRelationFilter;
};
