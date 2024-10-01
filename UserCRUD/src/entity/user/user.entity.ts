import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinTable } from 'typeorm';
import { Hobby } from '../hobby/hobby.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Hobby, (hobby) => hobby.users, { cascade: true })
  @JoinTable()
  hobbies: Hobby[];
}
