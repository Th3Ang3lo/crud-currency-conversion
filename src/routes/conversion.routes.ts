import { Router } from 'express'

import { CreateConversionController } from '@controllers/CreateConversionController'
import { ListConversionsController } from '@controllers/ListConversionsController'
import { GetConversionController } from '@controllers/GetConversionController'

export const conversionRouter = Router()

const createConversionController = new CreateConversionController()
const listConversionController = new ListConversionsController()
const getConversionController = new GetConversionController()

conversionRouter.post('/', createConversionController.handle)
conversionRouter.get('/list', listConversionController.handle)
conversionRouter.get('/:conversionID', getConversionController.handle)
