export interface IConn {
  create(data: any): Promise<void>;
  close(): Promise<void>;
}
