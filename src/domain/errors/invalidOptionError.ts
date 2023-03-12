export class InvalidOption extends Error implements IDomainError {
  constructor(message: string) {
    super(message);
    this.name = 'invalidOptionError';
  }
}
