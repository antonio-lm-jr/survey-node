import { CreateSurveyUseCase } from '../../application/useCase/createSurvey';
import { Identifier } from '../../infra/identifier/identifierAdapter';
import { CreateSurveyController } from '../../presentation/controllers/createSurveyController';

export const makeCreateSurveyFactory = () => {
  const identifier = new Identifier();
  const useCase = new CreateSurveyUseCase(identifier);

  return new CreateSurveyController(useCase);
};
