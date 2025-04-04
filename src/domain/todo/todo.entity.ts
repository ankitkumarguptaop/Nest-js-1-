import { User } from 'src/domain/user/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  todo: string;
  
  @ManyToOne(() => User, (user) => user.id)
  user_id: number

  @Column()
  completed: boolean;
}
