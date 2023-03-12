import { Router } from 'express';
import { adaptRoute } from '../adapter/express-route-adapter';
import { makeCreateSurveyFactory } from '../factory/makeCreateSurveyFactory';

const surveyRouter = Router();

surveyRouter.post('/survey', adaptRoute(makeCreateSurveyFactory()));

export { surveyRouter };
