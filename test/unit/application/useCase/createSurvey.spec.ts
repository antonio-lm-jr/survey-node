import { describe, expect, test } from 'vitest';
import { CreateSurveyUseCase } from '../../../../src/application/useCase/createSurvey';

describe('[UseCase] Create Survey', () => {
  test('Should...', async () => {
    const useCase = new CreateSurveyUseCase();

    const result = await useCase.execute({});

    expect(1).toBe(1);
  });
});
