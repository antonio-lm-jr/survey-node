export class InvalidStopPublish extends Error implements IDomainError {
  constructor(message: string) {
    super(message);
    this.name = 'InvalidStopPublishError';
  }
}
