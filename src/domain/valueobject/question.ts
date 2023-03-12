import { Either, left, right } from '../../shared/either';
import { Guard } from '../../shared/guard';
import { InvalidQuestion } from '../errors/invalidQuestion';

export class Question {
  private static maxChars = 100;
  private static minChars = 5;

  private readonly name: string;

  private constructor(value: string) {
    this.name = value;
  }

  get value(): string {
    return this.name;
  }

  public static create(value: string): Either<InvalidQuestion, Question> {
    const guardEmpty = Guard.notEmpty(value);
    const guardMaxChars = Guard.isNotGreaterThanChars(value, this.maxChars);
    const guardMinChars = Guard.isNotLessThanChars(value, this.minChars);

    const guard = Guard.combine([guardEmpty, guardMaxChars, guardMinChars]);

    if (!guard.succeeded) {
      return left(new InvalidQuestion(guard.message || ''));
    }

    return right(new Question(value));
  }
}
