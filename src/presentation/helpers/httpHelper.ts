interface IBadRequest {
  code: string;
  message: string;
}

export const badRequest = ({ code, message }: IBadRequest): any => ({
  statusCode: 400,
  body: {
    statusCode: 400,
    code,
    message,
  },
});

export const ok = (data: any): any => ({
  statusCode: 200,
  body: {
    statusCode: 200,
    data: data.value,
  },
});

export const created = (data: any): any => ({
  statusCode: 201,
  body: {
    statusCode: 201,
    data: data.value,
  },
});

export const serverError = (message: string): any => ({
  statusCode: 500,
  body: {
    statusCode: 500,
    code: 'internalServerError',
    message,
  },
});
