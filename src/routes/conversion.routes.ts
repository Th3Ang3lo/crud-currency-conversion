import { Router } from 'express'

import { CreateConversionController } from '@controllers/CreateConversionController'

export const conversionRouter = Router()

const createConversionController = new CreateConversionController()

conversionRouter.post('/', createConversionController.handle)
