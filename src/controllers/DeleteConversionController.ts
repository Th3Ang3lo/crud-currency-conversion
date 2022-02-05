import { Request, Response } from 'express'

import { Controller } from '@shared/protocols/controller'
import { deleteConversionServiceFactory } from '@shared/factories/ConversionFactories'

export class DeleteConversionController implements Controller {
  public async handle (request: Request, response: Response): Promise<Response> {
    try {
      const { conversionID } = request.params

      const deleteConversionService = deleteConversionServiceFactory()
      await deleteConversionService.execute(conversionID as unknown as number)

      return response.sendStatus(204)
    } catch (error) {
      return response.status(error.statusCode || 500).send({
        statusCode: error.statusCode,
        message: error.errorMessage || 'Internal server error'
      })
    }
  }
}
