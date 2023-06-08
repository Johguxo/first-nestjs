import { TaskStatus } from "../tasks.entity"
import { IsString, IsNotEmpty, MinLength,IsIn } from 'class-validator'
export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  title: string

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  description: string
}

export class UpdateTaskDto {
  title?: string
  description?: string
  @IsIn([TaskStatus.DONE, TaskStatus.IN_PROGRESS, TaskStatus.PENDING])
  status?: TaskStatus
}