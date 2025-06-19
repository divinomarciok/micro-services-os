import { Request, Response } from 'express';
import { TecnicoService } from '../services/tecnico.service';
import { Tecnico } from '../models/Tecnico';

export class TecnicoController {
  private tecnicoService: TecnicoService;

  constructor() {
    this.tecnicoService = new TecnicoService();
  }

  async create(req: Request, res: Response): Promise<void> {
    try {
      const tecnico: Tecnico = req.body;
      const newTecnico = await this.tecnicoService.create(tecnico);
      res.status(201).json(newTecnico);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create Tecnico' });
    }
  }

  async findById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const tecnico = await this.tecnicoService.findByid(id);
      if (tecnico) {
        res.status(200).json(tecnico);
      } else {
        res.status(404).json({ error: 'Tecnico not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch Tecnico' });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const tecnico: Tecnico = req.body;
      const updatedTecnico = await this.tecnicoService.update(id, tecnico);
      if (updatedTecnico) {
        res.status(200).json(updatedTecnico);
      } else {
        res.status(404).json({ error: 'Tecnico not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to update Tecnico' });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const success = await this.tecnicoService.delete(id);
      if (success) {
        res.status(200).json({ message: 'Tecnico deleted successfully' });
      } else {
        res.status(404).json({ error: 'Tecnico not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete Tecnico' });
    }
  }

  async list(req: Request, res: Response): Promise<void> {
    try {
      const tecnicos = await this.tecnicoService.list();
      res.status(200).json(tecnicos);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch Tecnicos' });
    }
  }
}
