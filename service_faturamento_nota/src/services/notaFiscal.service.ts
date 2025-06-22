import { CRUDRepository } from '../interface/crud.interface';
import { NotaFiscal } from '../models/NotaFiscal';
import { Repository } from 'typeorm';
import { AppDataSource } from '../config/db';

export class NotaFiscalService implements CRUDRepository<NotaFiscal> {
  private notaFiscalRepository: Repository<NotaFiscal>;

  constructor() {
    this.notaFiscalRepository = AppDataSource.getRepository(NotaFiscal);
  }

  async create(item: NotaFiscal): Promise<NotaFiscal> {
    return await this.notaFiscalRepository.save(item);
  }

  async findByid(id: number): Promise<NotaFiscal | null> {
    return await this.notaFiscalRepository.findOneBy({ id });
  }

  async update(id: number, item: NotaFiscal): Promise<NotaFiscal | null> {
    const nota = await this.findByid(id);
    if (!nota) return null;
    await this.notaFiscalRepository.update(id, item);
    return await this.findByid(id);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.notaFiscalRepository.delete(id);
    return result.affected !== 0;
  }

  async list(): Promise<NotaFiscal[]> {
    return await this.notaFiscalRepository.find();
  }
}
