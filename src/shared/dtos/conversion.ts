export interface Conversion {
  id: number
  currency: string
  convertedCurrency: string
  value: number
  convertedValue: number
  created_at: Date
  updated_at: Date
}
