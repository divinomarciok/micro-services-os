import { CRUDRepository } from '../interface/crud.interface';
import { ProdutoServico } from '../models/ProdutoServico';
import { Repository } from 'typeorm';
import { AppDataSource } from '../config/db';

export class ProdutoServicoService implements CRUDRepository<ProdutoServico> {
  private produtoServicoRepository: Repository<ProdutoServico>;

  constructor() {
    this.produtoServicoRepository = AppDataSource.getRepository(ProdutoServico);
  }

  async create(item: ProdutoServico): Promise<ProdutoServico> {
    return await this.produtoServicoRepository.save(item);
  }

  async findByid(id: number): Promise<ProdutoServico | null> {
    return await this.produtoServicoRepository.findOneBy({ id });
  }

  async update(id: number, item: ProdutoServico): Promise<ProdutoServico | null> {
    const produtoServico = await this.findByid(id);
    if (!produtoServico) return null;
    await this.produtoServicoRepository.update(id, item);
    return await this.findByid(id);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.produtoServicoRepository.delete(id);
    return result.affected !== 0;
  }

  async list(): Promise<ProdutoServico[]> {
    return await this.produtoServicoRepository.find();
  }
}
