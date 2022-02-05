export class AppError {
  public readonly errorMessage: string

  public readonly statusCode: number

  constructor (message: string, statusCode = 400) {
    this.errorMessage = message
    this.statusCode = statusCode
  }
}
