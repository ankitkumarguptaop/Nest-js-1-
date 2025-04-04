

import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from '../../domain/todo/todo.entity';
import { TodoService } from './todo.service';
import { TodoRepository } from 'src/infrastructure/repositories/todo/todo.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  controllers: [TodoController],
  providers: [TodoService, TodoRepository], // <-- both service and custom repo
})
export class TodoModule {}