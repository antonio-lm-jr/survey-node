export class InvalidDescription extends Error implements IDomainError {
  constructor(message: string) {
    super(message);
    this.name = 'invalidDescriptionError';
  }
}
