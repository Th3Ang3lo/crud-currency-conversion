import StatusCode from 'status-code-enum'
import { AppError } from './AppError'

export class ForbiddenException extends AppError {
  statusCode = StatusCode.ClientErrorForbidden

  constructor (message?: string) {
    super(message || 'Forbidden')
  }
}
