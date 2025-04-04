import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Todo } from 'src/domain/todo/todo.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class TodoRepository  extends Repository <Todo>{

constructor(private dataSource: DataSource) {
    super(Todo, dataSource.createEntityManager());
  }
  async createTodo(payload: Partial<Todo>): Promise<Todo> {
    return await this.save(payload);
  }

  async findTodo(id: number): Promise<Todo | null> {
    return await this.findOne({ where: { id } });
  }

  async updateTodo(id: number, payload: Partial<Todo>): Promise<Todo | null> {
    await this.update(id, {
      ...(payload.completed !== undefined && { completed: payload.completed }),
      ...(payload.todo && { todo: payload.todo }),
    });
    return await this.findOne({ where: { id } });
  }

  async findAll(): Promise<Todo[]> {
    return await this.find();
  }

  async deleteTodo(id: number): Promise<void> {
    await this.delete(id);
  }
}
