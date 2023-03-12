export class InvalidQuestion extends Error implements IDomainError {
  constructor(message: string) {
    super(message);
    this.name = 'invalidQuestionError';
  }
}
