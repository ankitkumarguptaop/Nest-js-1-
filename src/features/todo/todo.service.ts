import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TodoRepository } from 'src/infrastructure/repositories/todo/todo.repository';
import { UpdateTodoDto } from './update-todo.dto';
import { CreateTodoDto } from './create-todo.dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(TodoRepository) private todoRepository: TodoRepository,
  ) {}
  
  async create(createTodoDto: CreateTodoDto ,userId: number) {
    return await this.todoRepository.createTodo({ 
      ...createTodoDto, 
      user: { id: userId } as any
    });
  }

  async findAll(userId: number) {
    return await this.todoRepository.findAll(userId );
  }

  async findOne(id: number) {
    return await this.todoRepository.findTodo(id);
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    return await this.todoRepository.updateTodo(id, updateTodoDto);
  }

  async remove(id: number) {
    return await this.todoRepository.deleteTodo(id);
  }
}
