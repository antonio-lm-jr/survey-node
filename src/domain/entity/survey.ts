import { Entity } from '../../shared/entity';
import { Description } from '../valueobject/description';
import { Question } from '../valueobject/question';
import { Option } from '../valueobject/option';
import { Either, left, right } from '../../shared/either';
import { InvalidSurvey } from '../errors/invalidSurvey';
import { Guard } from '../../shared/guard';
import { StartPublish } from '../valueobject/startPublish';
import { StopPublish } from '../valueobject/stopPublish';

interface ISurveyProps {
  reference: string;
  question: Question;
  description: Description;
  startPublish: StartPublish;
  stopPublish: StopPublish;
  options: Option[];
}

export class Survey extends Entity<ISurveyProps> {
  private static optMinSize = 1;
  private static optMaxSize = 10;

  private constructor(props: ISurveyProps) {
    super(props);
  }

  get reference(): string {
    return this.props.reference;
  }

  get question(): Question {
    return this.props.question;
  }

  get description(): Description {
    return this.props.description;
  }

  get startPublish(): StartPublish {
    return this.props.startPublish;
  }

  get stopPublish(): StopPublish {
    return this.props.stopPublish;
  }

  get options(): Option[] {
    return this.props.options;
  }

  public static create(props: ISurveyProps): Either<InvalidSurvey, Survey> {
    const guardOptLen = Guard.lengthIsBetween(
      props.options,
      this.optMinSize,
      this.optMaxSize
    );

    if (!guardOptLen.succeeded) {
      return left(new InvalidSurvey(guardOptLen.message || ''));
    }

    return right(new Survey(props));
  }
}
