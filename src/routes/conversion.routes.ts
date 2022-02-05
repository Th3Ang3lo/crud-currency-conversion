import { Router } from 'express'

import { CreateConversionController } from '@controllers/CreateConversionController'
import { ListConversionsController } from '@controllers/ListConversionsController'
import { GetConversionController } from '@controllers/GetConversionController'
import { DeleteConversionController } from '@controllers/DeleteConversionController'

export const conversionRouter = Router()

const createConversionController = new CreateConversionController()
const listConversionController = new ListConversionsController()
const getConversionController = new GetConversionController()
const deleteConversionController = new DeleteConversionController()

conversionRouter.post('/', createConversionController.handle)
conversionRouter.get('/list', listConversionController.handle)
conversionRouter.get('/:conversionID', getConversionController.handle)
conversionRouter.delete('/:conversionID', deleteConversionController.handle)
