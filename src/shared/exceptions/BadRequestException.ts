import StatusCode from 'status-code-enum'
import { AppError } from './AppError'

interface IParams {
  [index: string]: string
}

export class BadRequestException extends AppError {
  statusCode = StatusCode.ClientErrorBadRequest
  params = {}

  constructor (message?: string, params?: IParams) {
    super(message || 'Unauthorized')
    this.params = params
  }
}
