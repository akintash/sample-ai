import { SortOrder } from "../../util/SortOrder";

export type BoardOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  name?: SortOrder;
  description?: SortOrder;
  projectId?: SortOrder;
};
