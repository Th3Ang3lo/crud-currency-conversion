import { Router } from 'express'
import { conversionRouter } from './conversion.routes'

export const Routes = Router()

Routes.use('/conversion', conversionRouter)
