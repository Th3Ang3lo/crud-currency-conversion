import { Conversion } from '@models/Conversion'

import { IConversionRepository } from '@repositories/IConversionRepository'

import * as conversionValidator from '@shared/validations/conversionValidator'

export class GetConversionService {
  constructor (
    private readonly conversionRepository: IConversionRepository
  ) {}

  public async execute (conversionID: number): Promise<Conversion> {
    await conversionValidator.validateConversionID(conversionID)
    const conversion = this.conversionRepository.findOne(Number(conversionID))

    return conversion
  }
}
