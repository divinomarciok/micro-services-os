import { CRUDRepository } from '../interface/crud.interface';
import { Cliente } from '../models/Cliente';
import { Repository } from 'typeorm';
import { AppDataSource } from '../config/db';

export class ClienteService implements CRUDRepository<Cliente> {
  private clienteRepository: Repository<Cliente>;

  constructor() {
    this.clienteRepository = AppDataSource.getRepository(Cliente);
  }

  async create(item: Cliente): Promise<Cliente> {

    return await this.clienteRepository.save(item);

  }

  async findByid(id: number): Promise<Cliente | null> {
    return await this.clienteRepository.findOneBy({ id });
  }

  async update(id: number, item: Cliente): Promise<Cliente | null> {
    const cliente = await this.findByid(id);
    if (!cliente) return null;

    await this.clienteRepository.update(id, item);
    return await this.findByid(id);
  }

  async delete(id: number): Promise<boolean> {
    const result = await this.clienteRepository.delete(id);
    return result.affected !== 0;
  }

  async list(): Promise<Cliente[]> {
    return await this.clienteRepository.find();
  }
}
