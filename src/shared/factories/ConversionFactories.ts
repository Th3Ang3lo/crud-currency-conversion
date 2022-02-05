import { CreateConversionService } from '@services/CreateConversionService'
import { ListConversionsService } from '@services/ListConversionsService'
import { GetConversionService } from '@services/GetConversionService'
import { DeleteConversionService } from '@services/DeleteConversionService'

import { ConversionRepositoryInMemory } from '@repositories/ConversionRepositoryInMemory'
import { CurrencyConverterProvider } from '@shared/providers/currencyConverterProvider/CurrencyConverterProvider'

// Persist datas in memory
const conversionRepository = new ConversionRepositoryInMemory()

export const createConversionServiceFactory = (): CreateConversionService => {
  return new CreateConversionService(
    conversionRepository,
    new CurrencyConverterProvider()
  )
}

export const listConversionsServiceFactory = (): ListConversionsService => {
  return new ListConversionsService(conversionRepository)
}

export const getConversionServiceFactory = (): GetConversionService => {
  return new GetConversionService(conversionRepository)
}

export const deleteConversionServiceFactory = (): DeleteConversionService => {
  return new DeleteConversionService(conversionRepository)
}
