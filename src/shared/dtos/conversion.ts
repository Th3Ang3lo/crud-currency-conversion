export interface ConversionData {
  id?: number
  currency: string
  convertedCurrency: string
  value: number
  convertedValue: number
  created_at?: Date
  updated_at?: Date
}

export interface IConversionRequestData {
  currency: string
  convertToCurrency: string
  value: number
}

export interface ICurrencyConverterAPIResponse {
  code: string
  codein: string
  name: string
  high: string
  low: string
  varBid: string
  pctChange: string
  bid: number
  ask: string
  timestamp: string
  create_date: string
}
