import { CRUDRepository } from '../interface/crud.interface';
import { Tecnico } from '../models/Tecnico';
import { Repository } from 'typeorm';
import { AppDataSource } from '../config/db';

export class TecnicoService implements CRUDRepository<Tecnico> {
  private tecnicoRepository: Repository<Tecnico>;

  constructor() {
    this.tecnicoRepository = AppDataSource.getRepository(Tecnico);
  }

  async create(item: Tecnico): Promise<Tecnico> {
    return await this.tecnicoRepository.save(item);
  }

  async findByid(id: number): Promise<Tecnico | null> {
    return await this.tecnicoRepository.findOneBy({ id });
  }

  async update(id: number, item: Tecnico): Promise<Tecnico | null> {
    const tecnico = await this.findByid(id);
    if (!tecnico) return null;
    await this.tecnicoRepository.update(id, item);
    return await this.findByid(id);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.tecnicoRepository.delete(id);
    return result.affected !== 0;
  }

  async list(): Promise<Tecnico[]> {
    return await this.tecnicoRepository.find();
  }
}
