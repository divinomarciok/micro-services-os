import { Request, Response } from 'express';
import { OSService } from '../services/os.service';
import { OS } from '../models/OS';

export class OSController {
  private osService: OSService;

  constructor() {
    this.osService = new OSService();
  }

  async create(req: Request, res: Response): Promise<void> {
    try {
      const os: OS = req.body;
      const newOS = await this.osService.create(os);
      res.status(201).json(newOS);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create OS' });
    }
  }

  async findById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const os = await this.osService.findByid(id);
      if (os) {
        res.status(200).json(os);
      } else {
        res.status(404).json({ error: 'OS not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch OS' });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const os: OS = req.body;
      const updatedOS = await this.osService.update(id, os);
      if (updatedOS) {
        res.status(200).json(updatedOS);
      } else {
        res.status(404).json({ error: 'OS not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to update OS' });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const success = await this.osService.delete(id);
      if (success) {
        res.status(200).json({ message: 'OS deleted successfully' });
      } else {
        res.status(404).json({ error: 'OS not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete OS' });
    }
  }

  async list(req: Request, res: Response): Promise<void> {
    try {
      const osList = await this.osService.list();
      res.status(200).json(osList);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch OS list' });
    }
  }
}
