export class InvalidSurvey extends Error implements IDomainError {
  constructor(message: string) {
    super(message);
    this.name = 'invalidSurveyError';
  }
}
