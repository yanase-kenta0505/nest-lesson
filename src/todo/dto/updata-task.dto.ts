import { IsOptional, IsString, IsNotEmpty } from "class-validator";

export class UpdateTaskDto {
  @IsString()
  @IsOptional()
  title: string

  @IsString()
  @IsOptional()
  description?: string
}