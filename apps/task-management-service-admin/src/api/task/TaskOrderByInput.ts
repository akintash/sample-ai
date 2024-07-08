import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  status?: SortOrder;
  dueDate?: SortOrder;
  title?: SortOrder;
  priority?: SortOrder;
  assignee?: SortOrder;
  boardId?: SortOrder;
  projectId?: SortOrder;
};
