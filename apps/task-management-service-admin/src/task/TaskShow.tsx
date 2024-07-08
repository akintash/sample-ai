import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { BOARD_TITLE_FIELD } from "../board/BoardTitle";
import { PROJECT_TITLE_FIELD } from "../project/ProjectTitle";

export const TaskShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="description" source="description" />
        <TextField label="status" source="status" />
        <TextField label="dueDate" source="dueDate" />
        <TextField label="title" source="title" />
        <TextField label="priority" source="priority" />
        <TextField label="assignee" source="assignee" />
        <ReferenceField label="Board" source="board.id" reference="Board">
          <TextField source={BOARD_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Project" source="project.id" reference="Project">
          <TextField source={PROJECT_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};
