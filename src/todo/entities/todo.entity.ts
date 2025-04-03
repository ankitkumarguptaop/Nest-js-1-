import { User } from "src/user/entities/user.entity";
import { Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


export class Todo {
  @PrimaryGeneratedColumn()
   id: number;
 
   @Column()
   todo: string;
 
   @ManyToOne(() => User, (user) => user.id)
    user_id: number;
 
   @Column()
   completed : boolean;
}
