import { Router } from 'express';
import traineeController from './Controller';
import validationHandler from '../../libs/validationHandler';
import authMiddleware from '../../libs/routes/authMiddleWare';
import { TRAINEES } from '../../libs/constants';
import validation from './validation';

const router = Router();

router
  .get(
    '/',
    authMiddleware(TRAINEES, 'read'),
    validationHandler(validation.get),
    traineeController.get
  )
  .post(
    '/',
    authMiddleware(TRAINEES, 'write'),
    validationHandler(validation.create),
    traineeController.create
  )
  .put(
    '/:id',
    authMiddleware(TRAINEES, 'write'),
    validationHandler(validation.update),
    traineeController.delete
  )
  .delete(
    '/:id',
    authMiddleware(TRAINEES, 'delete'),
    validationHandler(validation.delete),
    traineeController.delete
  );

export default router;
