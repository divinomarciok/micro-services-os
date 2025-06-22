import { Router, Request, Response } from 'express';
import { NotaFiscalController } from '../controllers/notaFiscal.controller';

const router = Router();
const notaFiscalController = new NotaFiscalController();

router.post('/notas-fiscais', (req: Request, res: Response) => notaFiscalController.create(req, res));
router.get('/notas-fiscais/:id', (req: Request, res: Response) => notaFiscalController.findById(req, res));
router.put('/notas-fiscais/:id', (req: Request, res: Response) => notaFiscalController.update(req, res));
router.delete('/notas-fiscais/:id', (req: Request, res: Response) => notaFiscalController.delete(req, res));
router.get('/notas-fiscais', (req: Request, res: Response) => notaFiscalController.list(req, res));

export default router;
