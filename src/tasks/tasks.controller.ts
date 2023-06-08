import { Controller, Get, Post, Delete, Patch, Body, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';

@Controller('tasks')
export class TasksController {

  constructor(
    private taskService: TasksService
  ) {}

  @Get()
  getTasks() {
    return this.taskService.getAllTasks()
  }

  @Post()
  createTask(@Body() newTask: CreateTaskDto) {
    const { title, description } = newTask
    return this.taskService.createTask(title, description)
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.taskService.deleteTask(id)
  }

  @Patch(':id')
  updateTask(@Param('id') id: string, @Body() body: UpdateTaskDto) {
    return this.taskService.updateTask(id, body)
  }

  
}
