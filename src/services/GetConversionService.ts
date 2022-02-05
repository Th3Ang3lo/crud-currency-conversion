import { Conversion } from '@models/Conversion'

import { IConversionRepository } from '@repositories/IConversionRepository'

import { NotFoundException } from '@shared/exceptions/NotFoundException'

import * as conversionValidator from '@shared/validations/conversionValidator'

export class GetConversionService {
  constructor (
    private readonly conversionRepository: IConversionRepository
  ) {}

  public async execute (conversionID: number): Promise<Conversion> {
    await conversionValidator.validateConversionID(conversionID)
    const conversion = this.conversionRepository.findOne(Number(conversionID))

    if (!conversion) throw new NotFoundException('Conversão não encontrada.')

    return conversion
  }
}
