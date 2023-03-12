import { IHttpRequest, IHttpResponse } from '../ports/http';

export interface IController {
  handle(httpRequest: IHttpRequest): Promise<IHttpResponse>;
}
