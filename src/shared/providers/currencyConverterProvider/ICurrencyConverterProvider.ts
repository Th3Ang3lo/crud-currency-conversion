import { CurrencyConverterProvider } from '@shared/providers/currencyConverterProvider/CurrencyConverterProvider'

import { ICurrencyConverterAPIResponse } from '@shared/dtos/conversion'

export interface ICurrencyConverterProvider {
  from: (currency: string) => CurrencyConverterProvider
  to: (currency: string) => Promise<ICurrencyConverterAPIResponse>
}
