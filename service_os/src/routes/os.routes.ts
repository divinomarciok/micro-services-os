import { Router, Request, Response } from 'express';
import { OSController } from '../controllers/os.controller';

const router = Router();
const osController = new OSController();

router.post('/os', (req: Request, res: Response) => osController.create(req, res));
router.get('/os/:id', (req: Request, res: Response) => osController.findById(req, res));
router.put('/os/:id', (req: Request, res: Response) => osController.update(req, res));
router.delete('/os/:id', (req: Request, res: Response) => osController.delete(req, res));
router.get('/os', (req: Request, res: Response) => osController.list(req, res));

export default router;
