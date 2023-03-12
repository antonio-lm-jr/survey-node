export interface IHttpRequest {
  body?: any;
  params?: any;
  query?: any;
}

export interface IHttpResponse {
  statusCode: number;
  body: any;
}
