import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type IntegrationWhereInput = {
  id?: StringFilter;
  settings?: JsonFilter;
  typeField?: StringNullableFilter;
};
