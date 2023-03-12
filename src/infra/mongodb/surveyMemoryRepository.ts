import { ISurveyRepository } from '../../application/ports/surveyRepoInterface';

export class SurveyMemoryRepository implements ISurveyRepository {
  constructor(private survey: any[] = []) {}

  create(data: any): void {
    this.survey.push(data);
  }
}
