import { Column, Table } from 'sequelize-typescript';

@Table
export class Users {
  @Column
  id: number;

  @Column
  email: string;

  @Column
  password: string;

  @Column
  name: string;
}
