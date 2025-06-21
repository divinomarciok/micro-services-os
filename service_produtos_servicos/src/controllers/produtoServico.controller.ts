import { Request, Response } from 'express';
import { ProdutoServicoService } from '../services/produtoServico.service';
import { ProdutoServico } from '../models/ProdutoServico';

export class ProdutoServicoController {
  private produtoServicoService: ProdutoServicoService;

  constructor() {
    this.produtoServicoService = new ProdutoServicoService();
  }

  async create(req: Request, res: Response): Promise<void> {
    try {
      const produtoServico: ProdutoServico = req.body;
      const newProdutoServico = await this.produtoServicoService.create(produtoServico);
      res.status(201).json(newProdutoServico);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create ProdutoServico' });
    }
  }

  async findById(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const produtoServico = await this.produtoServicoService.findByid(id);
      if (produtoServico) {
        res.status(200).json(produtoServico);
      } else {
        res.status(404).json({ error: 'ProdutoServico not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch ProdutoServico' });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const produtoServico: ProdutoServico = req.body;
      const updatedProdutoServico = await this.produtoServicoService.update(id, produtoServico);
      if (updatedProdutoServico) {
        res.status(200).json(updatedProdutoServico);
      } else {
        res.status(404).json({ error: 'ProdutoServico not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to update ProdutoServico' });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const id = parseInt(req.params.id);
      const success = await this.produtoServicoService.delete(id);
      if (success) {
        res.status(200).json({ message: 'ProdutoServico deleted successfully' });
      } else {
        res.status(404).json({ error: 'ProdutoServico not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete ProdutoServico' });
    }
  }

  async list(req: Request, res: Response): Promise<void> {
    try {
      const produtosServicos = await this.produtoServicoService.list();
      res.status(200).json(produtosServicos);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch ProdutoServicos' });
    }
  }
}
