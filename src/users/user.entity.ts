import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryColumn()
  userId: number;

  @Column()
  userName: string;

  @Column()
  password: string;
}
