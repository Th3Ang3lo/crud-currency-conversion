import { CreateConversionService } from '@services/CreateConversionService'

import { ConversionRepositoryInMemory } from '@repositories/ConversionRepositoryInMemory'
import { CurrencyConverterProvider } from '@shared/providers/currencyConverterProvider/CurrencyConverterProvider'

const conversionRepository = new ConversionRepositoryInMemory()

export const createConversionServiceFactory = (): CreateConversionService => {
  return new CreateConversionService(
    conversionRepository,
    new CurrencyConverterProvider()
  )
}
