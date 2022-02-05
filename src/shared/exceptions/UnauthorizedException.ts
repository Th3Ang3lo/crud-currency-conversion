import StatusCode from 'status-code-enum'
import { AppError } from './AppError'

export class UnauthorizedException extends AppError {
  statusCode = StatusCode.ClientErrorUnauthorized

  constructor (message?: string) {
    super(message || 'Unauthorized')
  }
}
