/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  MaxLength,
  IsOptional,
  ValidateNested,
} from "class-validator";
import { ProjectWhereUniqueInput } from "../../project/base/ProjectWhereUniqueInput";
import { Type } from "class-transformer";
import { TaskUpdateManyWithoutBoardsInput } from "./TaskUpdateManyWithoutBoardsInput";

@InputType()
class BoardUpdateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @MaxLength(1000)
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
    type: () => ProjectWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProjectWhereUniqueInput)
  @IsOptional()
  @Field(() => ProjectWhereUniqueInput, {
    nullable: true,
  })
  project?: ProjectWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => TaskUpdateManyWithoutBoardsInput,
  })
  @ValidateNested()
  @Type(() => TaskUpdateManyWithoutBoardsInput)
  @IsOptional()
  @Field(() => TaskUpdateManyWithoutBoardsInput, {
    nullable: true,
  })
  tasks?: TaskUpdateManyWithoutBoardsInput;
}

export { BoardUpdateInput as BoardUpdateInput };