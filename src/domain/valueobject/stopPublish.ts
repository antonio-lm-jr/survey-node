import { Either, left, right } from '../../shared/either';
import { Guard } from '../../shared/guard';
import { InvalidStopPublish } from '../errors/invalidStopPublish';

export class StopPublish {
  private readonly _value: Date;

  private constructor(value: Date) {
    this._value = value;
  }

  get value(): Date {
    return this._value;
  }

  public static create(value: Date): Either<InvalidStopPublish, StopPublish> {
    const guard = Guard.isValideDate(value);

    if (!guard.succeeded) {
      return left(new InvalidStopPublish(guard.message || ''));
    }

    return right(new StopPublish(value));
  }
}
