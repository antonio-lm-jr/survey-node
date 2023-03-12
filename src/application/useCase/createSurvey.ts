import { Survey } from '../../domain/entity/survey';
import { Description } from '../../domain/valueobject/description';
import { Option } from '../../domain/valueobject/option';
import { Question } from '../../domain/valueobject/question';
import { StartPublish } from '../../domain/valueobject/startPublish';
import { StopPublish } from '../../domain/valueobject/stopPublish';
import { Either, left, right } from '../../shared/either';
import { IUseCase } from '../../shared/useCaseInterface';
import { SurveyInputDTO, SurveyOutputDTO } from '../dto/surveyDTO';
import { IIdentifier } from '../ports/identifierInterface';
import { ISurveyRepository } from '../ports/surveyRepoInterface';

export class CreateSurveyUseCase implements IUseCase {
  constructor(
    private identifier: IIdentifier,
    private repository: ISurveyRepository
  ) {}

  private getOptionsFromDTO(
    input: SurveyInputDTO
  ): Either<IDomainError, Option[]> {
    const options: Option[] = [];

    if (!input?.options) return right(options);

    for (const opt of input.options) {
      const optOrErr = Option.create({
        identity: this.identifier.generate(),
        opt,
      });

      if (optOrErr.isLeft()) return left(optOrErr.value);

      options.push(optOrErr.value as Option);
    }

    return right(options);
  }

  public async execute(
    input: SurveyInputDTO
  ): Promise<Either<IDomainError, SurveyOutputDTO>> {
    const questionOrErr = Question.create(input.question);
    const descriptionOrErr = Description.create(input.description);
    const startPublishOrErr = StartPublish.create(input.startPublish);
    const stopPublishOrErr = StopPublish.create(input.stopPublish);
    const optsOrErr = this.getOptionsFromDTO(input);

    if (descriptionOrErr.isLeft()) {
      return left(descriptionOrErr.value);
    }

    if (questionOrErr.isLeft()) {
      return left(questionOrErr.value);
    }

    if (startPublishOrErr.isLeft()) {
      return left(startPublishOrErr.value);
    }

    if (stopPublishOrErr.isLeft()) {
      return left(stopPublishOrErr.value);
    }

    if (optsOrErr.isLeft()) {
      return left(optsOrErr.value);
    }

    const surveyOrErr = Survey.create({
      reference: this.identifier.generate(),
      question: questionOrErr.value as Question,
      description: descriptionOrErr.value as Description,
      startPublish: startPublishOrErr.value as StartPublish,
      stopPublish: stopPublishOrErr.value as StopPublish,
      options: optsOrErr.value as Option[],
    });

    if (surveyOrErr.isLeft()) {
      return left(surveyOrErr.value);
    }

    const surveyValue = surveyOrErr.value as Survey;

    this.repository.create(surveyValue);

    return right({
      reference: surveyValue.reference,
      question: surveyValue.question.value,
      description: surveyValue.description.value,
      startPublish: surveyValue.startPublish.value,
      stopPublish: surveyValue.stopPublish.value,
      options: surveyValue.options.map((item) => ({
        identity: item.identity,
        opt: item.opt,
      })),
    });
  }
}
