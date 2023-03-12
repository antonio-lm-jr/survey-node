import { IUseCase } from '../../shared/useCaseInterface';
import { badRequest, created, serverError } from '../helpers/httpHelper';
import { IHttpRequest, IHttpResponse } from '../ports/http';

export class CreateSurveyController {
  constructor(private useCase: IUseCase) {}

  public async handle(httpRequest: IHttpRequest): Promise<IHttpResponse> {
    try {
      const dto = httpRequest.body;
      const useCaseResult = await this.useCase.execute(dto);

      if (useCaseResult.isLeft()) {
        return badRequest({
          code: useCaseResult.value.name,
          message: useCaseResult.value.message,
        });
      }

      return created(useCaseResult);
    } catch (error) {
      return serverError((error as Error).message);
    }
  }
}
