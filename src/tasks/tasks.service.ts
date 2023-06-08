import { Injectable } from '@nestjs/common';
import { Task, TaskStatus } from './tasks.entity';
import { v4 } from 'uuid'

@Injectable()
export class TasksService {

  private tasks: Task[] = [
    {
      id: '1',
      title: 'first task',
      description: 'some task',
      status: TaskStatus.PENDING
    }
  ]

  getAllTasks() {
    return this.tasks
  }

  createTask(title: string, description: string) {
    const task = {
      id: v4(),
      title,
      description,
      status: TaskStatus.PENDING
    }

    this.tasks.push(task)
    return task

  }

  getTaskById(id: string): Task {
    return this.tasks.find((task) => task.id == id)
  }

  updateTask(id: string, body: any) {
    const {title, description} = body
    const task = {...this.getTaskById(id), title, description}
    return task
  }

  deleteTask(id: string) {
    this.tasks = this.tasks.filter((task) => task.id !== id)
  }
}
