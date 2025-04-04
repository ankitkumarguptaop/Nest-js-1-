import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from '../../features/todo/create-todo.dto';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
    
}
