import { Either, left, right } from '../../shared/either';
import { Guard } from '../../shared/guard';
import { InvalidOption } from '../errors/invalidOptionError';

interface IOptionProps {
  identity: string;
  opt: string;
}

export class Option {
  private static maxChars = 50;
  private static minChars = 1;

  private readonly _identity: string;
  private readonly _opt: string;

  private constructor(props: IOptionProps) {
    this._identity = props.identity;
    this._opt = props.opt;
  }

  get identity(): string {
    return this._identity;
  }

  get opt(): string {
    return this._opt;
  }

  public static create(props: IOptionProps): Either<InvalidOption, Option> {
    const guardEmpty = Guard.notEmpty(props.opt);
    const guardMaxChars = Guard.isNotGreaterThanChars(props.opt, this.maxChars);
    const guardMinChars = Guard.isNotLessThanChars(props.opt, this.minChars);

    const guard = Guard.combine([guardEmpty, guardMaxChars, guardMinChars]);

    if (!guard.succeeded) {
      return left(new InvalidOption(guard.message || ''));
    }

    return right(new Option(props));
  }
}
