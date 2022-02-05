import { Conversion } from '@models/Conversion'

import { ConversionData } from '@shared/dtos/conversion'
import { IConversionRepository } from './IConversionRepository'

export class ConversionRepositoryInMemory implements IConversionRepository {
  public conversions: Conversion[] = []
  public itemsCurrentCount: number = 0

  public create (conversionData: ConversionData): Conversion {
    const { currency, convertedCurrency, value, convertedValue } = conversionData

    const conversion = new Conversion()

    this.itemsCurrentCount++
    conversion.id = this.itemsCurrentCount
    conversion.currency = currency
    conversion.convertedCurrency = convertedCurrency
    conversion.value = value
    conversion.convertedValue = Number(convertedValue)

    this.conversions.push(conversion)

    return conversion
  }

  public findAll (): Conversion[] {
    return this.conversions
  }

  public findOne (conversionID: number): Conversion {
    return this.conversions.find(conversion => conversion.id === conversionID)
  }
}
