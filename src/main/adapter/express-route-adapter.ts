import { Request, Response } from 'express';
import { IController } from '../../presentation/controllers/controllerInterface';
import { IHttpRequest } from '../../presentation/ports/http';

export const adaptRoute = (controller: IController) => {
  return async (req: Request, res: Response) => {
    const httpRequest: IHttpRequest = {
      body: req.body,
      params: req.params,
      query: req.query,
    };

    const httpResponse = await controller.handle(httpRequest);
    res.status(httpResponse.statusCode).json(httpResponse.body);
  };
};
