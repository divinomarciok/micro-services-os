import { Router, Request, Response } from 'express';
import { TecnicoController } from '../controllers/tecnico.controller';

const router = Router();
const tecnicoController = new TecnicoController();

router.post('/tecnicos', (req: Request, res: Response) => tecnicoController.create(req, res));
router.get('/tecnicos/:id', (req: Request, res: Response) => tecnicoController.findById(req, res));
router.put('/tecnicos/:id', (req: Request, res: Response) => tecnicoController.update(req, res));
router.delete('/tecnicos/:id', (req: Request, res: Response) => tecnicoController.delete(req, res));
router.get('/tecnicos', (req: Request, res: Response) => tecnicoController.list(req, res));

export {router as tecnicoRouter};
