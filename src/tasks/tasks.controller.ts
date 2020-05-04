import { Controller, Get, Post, Body, Param, Delete, Patch, UsePipes, ValidationPipe } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task, Status } from './task.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private service: TasksService) {}

    @Post()
    @UsePipes(ValidationPipe)
    create(
        @Body() createTaskDto: CreateTaskDto
    ): Task {
        return this.service.create(createTaskDto);
    }

    @Get('/:id')
    read(@Param('id') id: string): Task {
        return this.service.read(id);
    }

    @Get()
    readAll(): Task[] {
        return this.service.readAll();
    }

    @Patch('/:id/status')
    updateStatus(@Param('id') id: string, @Body('status') status: Status) {
        return this.service.update(id, status);
    }

    @Delete('/:id')
    delete(@Param('id') id: string) {
        this.service.delete(id);
    }
}
