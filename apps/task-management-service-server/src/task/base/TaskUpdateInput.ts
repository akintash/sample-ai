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
  IsEnum,
  IsDate,
  ValidateNested,
} from "class-validator";
import { EnumTaskStatus } from "./EnumTaskStatus";
import { Type } from "class-transformer";
import { EnumTaskPriority } from "./EnumTaskPriority";
import { BoardWhereUniqueInput } from "../../board/base/BoardWhereUniqueInput";
import { ProjectWhereUniqueInput } from "../../project/base/ProjectWhereUniqueInput";

@InputType()
class TaskUpdateInput {
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
    enum: EnumTaskStatus,
  })
  @IsEnum(EnumTaskStatus)
  @IsOptional()
  @Field(() => EnumTaskStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dueDate?: Date | null;

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
  title?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumTaskPriority,
  })
  @IsEnum(EnumTaskPriority)
  @IsOptional()
  @Field(() => EnumTaskPriority, {
    nullable: true,
  })
  priority?: "Option1" | null;

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
  assignee?: string | null;

  @ApiProperty({
    required: false,
    type: () => BoardWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => BoardWhereUniqueInput)
  @IsOptional()
  @Field(() => BoardWhereUniqueInput, {
    nullable: true,
  })
  board?: BoardWhereUniqueInput | null;

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
}

export { TaskUpdateInput as TaskUpdateInput };
