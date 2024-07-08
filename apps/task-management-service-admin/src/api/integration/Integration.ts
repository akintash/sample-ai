import { JsonValue } from "type-fest";

export type Integration = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  settings: JsonValue;
  typeField: string | null;
};
