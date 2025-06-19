import { Router, Request, Response } from 'express';
import { ClienteController } from '../controllers/cliente.controller';

const router = Router();
const clienteController = new ClienteController();

router.post('/clientes', (req: Request, res: Response) => clienteController.create(req, res));
router.get('/clientes/:id', (req: Request, res: Response) => clienteController.findById(req, res));
router.put('/clientes/:id', (req: Request, res: Response) => clienteController.update(req, res));
router.delete('/clientes/:id', (req: Request, res: Response) => clienteController.delete(req, res));
router.get('/clientes', (req: Request, res: Response) => clienteController.list(req, res));

export { router as clienteRouter };
