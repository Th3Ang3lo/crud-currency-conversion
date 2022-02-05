import { Router } from 'express'

import { CreateConversionController } from '@controllers/CreateConversionController'
import { ListConversionsController } from '@controllers/ListConversionsController'

export const conversionRouter = Router()

const createConversionController = new CreateConversionController()
const listConversionController = new ListConversionsController()

conversionRouter.post('/', createConversionController.handle)
conversionRouter.get('/list', listConversionController.handle)
