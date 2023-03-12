import { ISurveyRepository } from '../../application/ports/surveyRepoInterface';
import { IConn } from './service/connInterface';

export class SurveyDatabaseRepository implements ISurveyRepository {
  constructor(private conn: IConn) {}

  create(data: any): void {
    this.conn.create(data);
  }
}
