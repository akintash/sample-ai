import { SortOrder } from "../../util/SortOrder";

export type IntegrationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  settings?: SortOrder;
  typeField?: SortOrder;
};
