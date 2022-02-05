import StatusCode from 'status-code-enum'
import { AppError } from './AppError'

export class InternalServerErrorException extends AppError {
  statusCode = StatusCode.ServerErrorInternal

  constructor (message?: string) {
    super(message || 'Internal server errror')
  }
}
