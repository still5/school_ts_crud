import { Router } from 'express';
const router = Router();
//import TodosController from './controller';
//const todosController = new TodosController();

router.post('/');
router.get('/');
router.patch('/:id');
router.delete('/:id');

router.get('/teachers');
router.get('/teachers/:id');
router.post('/teachers/');
router.put('/teachers/:id');
router.delete('/teachers/:id');

export default router;