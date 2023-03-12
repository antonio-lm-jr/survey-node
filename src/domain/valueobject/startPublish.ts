import { Either, left, right } from '../../shared/either';
import { Guard } from '../../shared/guard';
import { InvalidStartPublish } from '../errors/invalidStartPublish';

export class StartPublish {
  private readonly _value: Date;

  private constructor(value: Date) {
    this._value = value;
  }

  get value(): Date {
    return this._value;
  }

  public static create(value: Date): Either<InvalidStartPublish, StartPublish> {
    const guard = Guard.isValideDate(value);

    if (!guard.succeeded) {
      return left(new InvalidStartPublish(guard.message || ''));
    }

    return right(new StartPublish(value));
  }
}
