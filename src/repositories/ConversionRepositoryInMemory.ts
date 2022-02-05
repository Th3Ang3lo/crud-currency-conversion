import { Conversion } from '@models/Conversion'

import { ConversionData } from '@shared/dtos/conversion'

export class ConversionRepositoryInMemory {
  public conversions: Conversion[] = []
  public itemsCurrentCount: number = 0

  public async create (conversionData: ConversionData): Promise<Conversion> {
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
}
