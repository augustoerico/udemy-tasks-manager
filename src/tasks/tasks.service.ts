import { Injectable } from '@nestjs/common';
import { Task, Status } from './task.model';
import { v4 as uuid } from 'uuid';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
    private tasks: Task[] = [];

    create(createTaskDto: CreateTaskDto): Task {
        const { title, description } = createTaskDto;
        const task: Task = {
            id: uuid(),
            title,
            description,
            status: Status.OPEN
        }
        this.tasks.push(task);
        return task;
    }

    read(id: string): Task {
        return this.tasks.find(t => t.id === id);
    }

    readAll(): Task[] {
        return this.tasks;
    }

    update(id: string, status: Status): Task {
        let task = this.read(id);
        task.status = status;
        return task;
    }

    delete(id: string) {
        this.tasks = this.tasks.filter(t => t.id !== id);
    }
}
