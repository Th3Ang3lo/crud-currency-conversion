import { Request, Response } from 'express'

import { Controller } from '@shared/protocols/controller'
import { getConversionServiceFactory } from '@shared/factories/ConversionFactories'

export class GetConversionController implements Controller {
  public async handle (request: Request, response: Response): Promise<Response> {
    try {
      const { conversionID } = request.params

      const getConversionService = getConversionServiceFactory()
      const getConversion = await getConversionService.execute(conversionID as unknown as number)

      return response.send(getConversion)
    } catch (error) {
      return response.status(error.statusCode || 500).send({
        statusCode: error.statusCode,
        message: error.errorMessage || 'Internal server error'
      })
    }
  }
}
