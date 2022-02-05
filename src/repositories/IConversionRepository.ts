import { ConversionData } from '@shared/dtos/conversion'

import { Conversion } from '@models/Conversion'

export interface IConversionRepository {
  create: (conversionData: ConversionData) => Conversion
  findAll: () => Conversion[]
  findOne: (conversionID: number) => Conversion
  deleteOne: (conversionID: number) => void
}
