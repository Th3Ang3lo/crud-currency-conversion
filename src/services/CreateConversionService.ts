import { Conversion } from '@models/Conversion'
import { IConversionRequestData } from '@shared/dtos/conversion'

import { IConversionRepository } from '@repositories/IConversionRepository'
import { ICurrencyConverterProvider } from '@shared/providers/currencyConverterProvider/ICurrencyConverterProvider'

import { ForbiddenException } from '@shared/exceptions/ForbiddenException'

import * as conversionValidator from '@shared/validations/conversionValidator'

export class CreateConversionService {
  constructor (
    private readonly conversionRepository: IConversionRepository,
    private readonly currencyConverterProvider: ICurrencyConverterProvider
  ) { }

  public async execute (data: IConversionRequestData): Promise<Conversion> {
    const { currency, value, convertToCurrency } = data

    const conversionData = { currency, value, convertToCurrency }

    await conversionValidator.validateCreateConversion(conversionData)

    if (currency === convertToCurrency) {
      throw new ForbiddenException('Você não pode converter uma moeda para ela mesma.')
    }

    const conversor = await this.currencyConverterProvider
      .from(currency)
      .to(convertToCurrency)

    const convertedValue = (value * conversor.bid).toFixed(2)

    const createConversion = this.conversionRepository.create({
      currency,
      convertedCurrency: convertToCurrency,
      value,
      convertedValue
    })

    return createConversion
  }
}
