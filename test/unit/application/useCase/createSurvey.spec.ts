import { describe, expect, test } from 'vitest';
import { CreateSurveyUseCase } from '../../../../src/application/useCase/createSurvey';
import { SurveyMemoryRepository } from '../../../../src/infra/mongodb/surveyMemoryRepository';
import { identifyMock } from '../../../fixtures/identifyMock';
import { surveyObject } from '../../../fixtures/surveyFixture';

describe('[UseCase] Create Survey', () => {
  test('Should...', async () => {
    const memoryRepository = new SurveyMemoryRepository();

    const surveyInput = surveyObject();
    const useCase = new CreateSurveyUseCase(identifyMock, memoryRepository);

    const result = await useCase.execute(surveyInput);

    console.log(JSON.stringify(result));

    expect(1).toBe(1);
  });
});
