import { Either } from './either';

type L = any;
type A = any;

export interface IUseCase {
  execute(input?: any): Promise<Either<L, A>>;
}
