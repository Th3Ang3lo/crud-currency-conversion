import StatusCode from 'status-code-enum'
import { AppError } from './AppError'

export class NotFoundException extends AppError {
  statusCode = StatusCode.ClientErrorNotFound

  constructor (message?: string) {
    super(message || 'Not Found')
  }
}
