import { Router } from 'express';
import { surveyRouter } from './surveyRouter';

const v1Router = Router();

v1Router.use(surveyRouter);

export { v1Router };
