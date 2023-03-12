export interface IGuardResult {
  succeeded: boolean;
  message?: string;
}

export class Guard {
  public static combine(guardResults: IGuardResult[]): IGuardResult {
    for (const guard of guardResults) {
      if (!guard.succeeded) return guard;
    }

    return { succeeded: true };
  }

  public static notEmpty(value: any): IGuardResult {
    if (!value) {
      return { succeeded: false, message: 'is null, empty or undefined' };
    }

    return { succeeded: true };
  }

  public static isNotGreaterThanChars(
    value: string,
    numChars: number
  ): IGuardResult {
    if (!value || value.length <= numChars) {
      return { succeeded: true };
    }

    return { succeeded: false, message: `is greater than ${numChars} chars` };
  }

  public static isNotLessThanChars(
    value: string,
    numChars: number
  ): IGuardResult {
    if (!value || value.length >= numChars) {
      return { succeeded: true };
    }

    return { succeeded: false, message: `is less than ${numChars} chars` };
  }

  public static matchRegExp(arg: any, pattern: RegExp): IGuardResult {
    if (pattern.test(arg)) {
      return { succeeded: true };
    }

    return { succeeded: false, message: 'not in the pattern' };
  }

  public static lengthIsBetween(
    value: string | Array<any>,
    min: number,
    max: number
  ): IGuardResult {
    const length = value.length;

    if (length >= min && length <= max) {
      return { succeeded: true };
    }

    return {
      succeeded: false,
      message: `not between length ${min} and ${max}`,
    };
  }

  public static isValideDate(value: any): IGuardResult {
    if (!value) {
      return {
        succeeded: false,
        message: `is not valid date`,
      };
    }

    const tryParse = new Date(value);

    if (!(tryParse instanceof Date) || isNaN(tryParse.getDate())) {
      return {
        succeeded: false,
        message: `is not valid date`,
      };
    }

    return { succeeded: true };
  }
}
