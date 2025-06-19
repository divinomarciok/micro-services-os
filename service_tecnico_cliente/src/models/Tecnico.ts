import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Tecnico')
export class Tecnico {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 255 })
  nome!: string;

  @Column({ type: 'varchar', length: 255 })
  cargo!: string;

  @Column({ type: 'varchar', length: 255 })
  email!: string;

  @Column({ type: 'varchar', length: 255 })
  senha!: string;
}
