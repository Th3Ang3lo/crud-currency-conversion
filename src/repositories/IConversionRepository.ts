import { ConversionData } from '@shared/dtos/conversion'

import { Conversion } from '@models/Conversion'

export interface IConversionRepository {
  create: (conversionData: ConversionData) => Conversion
  findAll: () => Conversion[]
}
