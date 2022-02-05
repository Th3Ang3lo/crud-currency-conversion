import axios from 'axios'

import { BadRequestException } from '@shared/exceptions/BadRequestException'

import { ICurrencyConverterAPIResponse } from '@shared/dtos/conversion'
import { ICurrencyConverterProvider } from './ICurrencyConverterProvider'

export class CurrencyConverterProvider implements ICurrencyConverterProvider {
  public fromCurrency: string

  public from (currency: string): CurrencyConverterProvider {
    this.fromCurrency = currency

    return this
  }

  public async to (currency: string): Promise<ICurrencyConverterAPIResponse> {
    const fromCurrency = this.fromCurrency
    const toCurrency = currency

    if (!this.from) {
      throw new Error('Please, use from function before. Example: CurrencyConverterProvider.from(\'USD\').to(\'BRL\')')
    }

    try {
      const response = await axios.get(`https://economia.awesomeapi.com.br/last/${fromCurrency}-${toCurrency}`)

      return Object.values(response.data)[0] as ICurrencyConverterAPIResponse
    } catch (error) {
      throw new BadRequestException('Erro ao realizar conversão, verifique se as moedas existem.')
    }
  }
}
