import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';

@Entity('OS')
export class OS {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  cliente!: number; // FK para Cliente

  @Column()
  produtoServico!: number; // FK para ProdutoServico

  @Column()
  tecnico!: number; // FK para Tecnico

  @Column({ type: 'date' })
  dataAbertura!: Date;

  @Column({ type: 'varchar', length: 255 })
  status!: string;

  @Column({ type: 'varchar', length: 255 })
  descricaoProblema!: string;
}
