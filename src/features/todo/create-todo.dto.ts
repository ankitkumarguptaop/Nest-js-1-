import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTodoDto {
  // @IsNotEmpty()
  user_id: number;

  @IsNotEmpty()
  completed: boolean;

  @IsNotEmpty()
  todo: string;
}
