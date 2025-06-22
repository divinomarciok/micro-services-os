import { CRUDRepository } from '../interface/crud.interface';
import { OS } from '../models/OS';
import { Repository } from 'typeorm';
import { AppDataSource } from '../config/db';

export class OSService implements CRUDRepository<OS> {
  private osRepository: Repository<OS>;

  constructor() {
    this.osRepository = AppDataSource.getRepository(OS);
  }

  async create(item: OS): Promise<OS> {
    return await this.osRepository.save(item);
  }

  async findByid(id: number): Promise<OS | null> {
    return await this.osRepository.findOneBy({ id });
  }

  async update(id: number, item: OS): Promise<OS | null> {
    const os = await this.findByid(id);
    if (!os) return null;
    await this.osRepository.update(id, item);
    return await this.findByid(id);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.osRepository.delete(id);
    return result.affected !== 0;
  }

  async list(): Promise<OS[]> {
    return await this.osRepository.find();
  }
}
