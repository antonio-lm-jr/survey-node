import { CreateSurveyUseCase } from '../../application/useCase/createSurvey';
import { Identifier } from '../../infra/identifier/identifierAdapter';
import { SurveyMemoryRepository } from '../../infra/mongodb/surveyMemoryRepository';
import { CreateSurveyController } from '../../presentation/controllers/createSurveyController';

export const makeCreateSurveyFactory = () => {
  const identifier = new Identifier();
  const memoryRepository = new SurveyMemoryRepository();

  const useCase = new CreateSurveyUseCase(identifier, memoryRepository);

  return new CreateSurveyController(useCase);
};
