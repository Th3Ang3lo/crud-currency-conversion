import { Request, Response } from 'express'

import { Controller } from '@shared/protocols/controller'
import { createConversionServiceFactory } from '@shared/factories/ConversionFactories'

export class CreateConversionController implements Controller {
  public async handle (request: Request, response: Response): Promise<Response> {
    try {
      const { currency, convertToCurrency, value } = request.body

      const createConversionService = createConversionServiceFactory()
      const createConversion = await createConversionService.execute({ currency, convertToCurrency, value })

      return response.send(createConversion)
    } catch (error) {
      console.log(error)
      return response.status(error.statusCode || 500).send({
        statusCode: error.statusCode,
        message: error.errorMessage || 'Internal server error',
        params: error.params
      })
    }
  }
}
