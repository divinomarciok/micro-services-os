import { Request, Response } from 'express';
import { ClienteService } from '../services/cliente.service';
import { Cliente } from '../models/Cliente';

export class ClienteController {
  private clienteService: ClienteService;

  constructor() {
    this.clienteService = new ClienteService();
  }

  async create(req: Request, res: Response): Promise<void> {
    try {

      const cliente: Cliente = req.body;
      console.log(req.body);
      console.log(cliente)

      const newCliente = await this.clienteService.create(cliente);
      res.status(201).json(newCliente);
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: 'Failed to create Cliente', err});
    }
  }

  async findById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const cliente = await this.clienteService.findByid(id);
      if (cliente) {
        res.status(200).json(cliente);
      } else {
        res.status(404).json({ error: 'Cliente not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch Cliente' });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const cliente: Cliente = req.body;
      const updatedCliente = await this.clienteService.update(id, cliente);
      if (updatedCliente) {
        res.status(200).json(updatedCliente);
      } else {
        res.status(404).json({ error: 'Cliente not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to update Cliente' });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const success = await this.clienteService.delete(id);
      if (success) {
        res.status(200).json({ message: 'Cliente deleted successfully' });
      } else {
        res.status(404).json({ error: 'Cliente not found' });
      }
    } catch (err) {
      console.log(err);
      console.error(err);
      res.status(500).json({ error: 'Failed to delete Cliente', err });
    }
  }

  async list(req: Request, res: Response): Promise<void> {
    try {
      const clientes = await this.clienteService.list();
      res.status(200).json(clientes);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch Clientes' });
    }
  }
}
