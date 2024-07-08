import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  DateTimeInput,
  ReferenceInput,
} from "react-admin";

import { BoardTitle } from "../board/BoardTitle";
import { ProjectTitle } from "../project/ProjectTitle";

export const TaskCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <DateTimeInput label="dueDate" source="dueDate" />
        <TextInput label="title" source="title" />
        <SelectInput
          source="priority"
          label="priority"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="assignee" source="assignee" />
        <ReferenceInput source="board.id" reference="Board" label="Board">
          <SelectInput optionText={BoardTitle} />
        </ReferenceInput>
        <ReferenceInput source="project.id" reference="Project" label="Project">
          <SelectInput optionText={ProjectTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
