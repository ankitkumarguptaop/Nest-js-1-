import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {
 constructor(private readonly todoService : TodoService) {}
    @Get()
    findAllTodo(){
      return this.todoService.listAllTodos()
    }

    @Get(':id')
    findTodo(@Param("id" ,ParseIntPipe) id:number ){
      return this.todoService.getTodo(id)
    }

    @Post()
    createTodo(@Body() body ){
        return this.todoService.createTodo(body)
    }
    @Delete(":id")
    deleteTodo(@Param("id" ,ParseIntPipe) id:number ){
        return this.todoService.deleteTodo(id)
    }

    @Patch(":id")
    updateTodo(@Param("id" ,ParseIntPipe) id:number, @Body() body ){
        return this.todoService.updateTodo(id,body)
    }
}
