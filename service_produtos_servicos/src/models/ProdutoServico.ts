import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('ProdutoServico')
export class ProdutoServico {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'varchar', length: 255 })
  codigo!: string;

  @Column({ type: 'varchar', length: 255 })
  nome!: string;

  @Column({ type: 'varchar', length: 255 })
  descricao!: string;

  @Column({ type: 'double precision' })
  valor!: number;

  @Column({ type: 'int' })
  tempoEstimado!: number;
}
