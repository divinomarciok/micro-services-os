import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('NotaFiscal')
export class NotaFiscal {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ type: 'date' })
  dataEmissao!: Date;

  @Column()
  ordemDeServico!: number; // FK para OrdemDeServico

  @Column({ type: 'double precision' })
  valorTotal!: number;
}
