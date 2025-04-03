import { Injectable } from '@nestjs/common';
import data from './data';

@Injectable()
export class TodoService {
  listAllTodos() {
    return data;
  }
  getTodo(id: number) {
    return data.todos.find((todo) => {
      return todo.id === id;
    });
  }
  createTodo(payload) {
    data.todos.push({
      id: payload.id,
      todo: payload.todo,
      completed: payload.completed,
      userId: payload.userId,
    });
    return data;
  }

  deleteTodo(id: number) {
    const index: number = data.todos.findIndex((todo) => {
      return todo.id === id;
    });
    if (index >= 0) {
      data.todos.splice(index, 1);
    } else {
      return 'no todo find to delete';
    }
    return data;
  }

  updateTodo(id: number, body) {
    const index: number = data.todos.findIndex((todo) => {
      return todo.id === id;
    });
    
    console.log('✌️body?.completed --->', body?.completed);
    if (body?.completed ===false ||body?.completed ===true  ) {
      data.todos[index].completed = body.completed;
    }
    if (body.todo) {
      data.todos[index].todo = body.todo;
    }

    return data;
  }
}
