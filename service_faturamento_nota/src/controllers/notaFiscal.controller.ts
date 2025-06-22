import { Request, Response } from 'express';
import { NotaFiscalService } from '../services/notaFiscal.service';
import { NotaFiscal } from '../models/NotaFiscal';

export class NotaFiscalController {
  private notaFiscalService: NotaFiscalService;

  constructor() {
    this.notaFiscalService = new NotaFiscalService();
  }

  async create(req: Request, res: Response): Promise<void> {
    try {
      const notaFiscal: NotaFiscal = req.body;
      const newNotaFiscal = await this.notaFiscalService.create(notaFiscal);
      res.status(201).json(newNotaFiscal);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create NotaFiscal' });
    }
  }

  async findById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const notaFiscal = await this.notaFiscalService.findByid(id);
      if (notaFiscal) {
        res.status(200).json(notaFiscal);
      } else {
        res.status(404).json({ error: 'NotaFiscal not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch NotaFiscal' });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const notaFiscal: NotaFiscal = req.body;
      const updatedNotaFiscal = await this.notaFiscalService.update(id, notaFiscal);
      if (updatedNotaFiscal) {
        res.status(200).json(updatedNotaFiscal);
      } else {
        res.status(404).json({ error: 'NotaFiscal not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to update NotaFiscal' });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const success = await this.notaFiscalService.delete(id);
      if (success) {
        res.status(200).json({ message: 'NotaFiscal deleted successfully' });
      } else {
        res.status(404).json({ error: 'NotaFiscal not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete NotaFiscal' });
    }
  }

  async list(req: Request, res: Response): Promise<void> {
    try {
      const notas = await this.notaFiscalService.list();
      res.status(200).json(notas);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch NotaFiscal list' });
    }
  }
}
