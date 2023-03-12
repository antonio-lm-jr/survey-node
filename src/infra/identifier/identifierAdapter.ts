import crypto from 'crypto';
import { IIdentifier } from '../../application/ports/identifierInterface';

export class Identifier implements IIdentifier {
  generate(): string {
    return crypto.randomUUID();
  }
}
