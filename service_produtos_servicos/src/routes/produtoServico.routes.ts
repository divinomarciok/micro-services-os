import { Router, Request, Response } from 'express';
import { ProdutoServicoController } from '../controllers/produtoServico.controller';

const router = Router();
const produtoServicoController = new ProdutoServicoController();

router.post('/produtos-servicos', (req: Request, res: Response) => produtoServicoController.create(req, res));
router.get('/produtos-servicos/:id', (req: Request, res: Response) => produtoServicoController.findById(req, res));
router.put('/produtos-servicos/:id', (req: Request, res: Response) => produtoServicoController.update(req, res));
router.delete('/produtos-servicos/:id', (req: Request, res: Response) => produtoServicoController.delete(req, res));
router.get('/produtos-servicos', (req: Request, res: Response) => produtoServicoController.list(req, res));

export default router;
