import { Request, Response } from 'express'

import { Controller } from '@shared/protocols/controller'

import { listConversionsServiceFactory } from '@shared/factories/ConversionFactories'

export class ListConversionsController implements Controller {
  public async handle (request: Request, response: Response): Promise<Response> {
    try {
      const listConversionsService = listConversionsServiceFactory()
      const listConversions = await listConversionsService.execute()

      return response.send(listConversions)
    } catch (error) {
      return response.status(error.statusCode || 500).send({
        statusCode: error.statusCode,
        message: error.errorMessage || 'Internal server error'
      })
    }
  }
}
