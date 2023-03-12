import { Either, left, right } from '../../shared/either';
import { Guard } from '../../shared/guard';
import { InvalidDescription } from '../errors/invalidDescription';

export class Description {
  private static maxChars = 500;

  private readonly name: string;

  private constructor(value: string) {
    this.name = value;
  }

  get value(): string {
    return this.name;
  }

  public static create(value: string): Either<InvalidDescription, Description> {
    const guardEmpty = Guard.notEmpty(value);
    const guardMaxChars = Guard.isNotGreaterThanChars(value, this.maxChars);

    const guard = Guard.combine([guardEmpty, guardMaxChars]);

    if (!guard.succeeded) {
      return left(new InvalidDescription(guard.message || ''));
    }

    return right(new Description(value));
  }
}
