import { Integration as TIntegration } from "../api/integration/Integration";

export const INTEGRATION_TITLE_FIELD = "typeField";

export const IntegrationTitle = (record: TIntegration): string => {
  return record.typeField?.toString() || String(record.id);
};
