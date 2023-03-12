export class InvalidStartPublish extends Error implements IDomainError {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidStartPublishError';
  }
}
