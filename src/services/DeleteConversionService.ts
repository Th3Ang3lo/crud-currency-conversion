import { IConversionRepository } from '@repositories/IConversionRepository'

import { NotFoundException } from '@shared/exceptions/NotFoundException'

import * as conversionValidator from '@shared/validations/conversionValidator'

export class DeleteConversionService {
  constructor (
    private readonly conversionRepository: IConversionRepository
  ) {}

  public async execute (conversionID: number): Promise<void> {
    await conversionValidator.validateConversionID(conversionID)
    const conversion = this.conversionRepository.findOne(Number(conversionID))

    if (!conversion) throw new NotFoundException('Conversão não encontrada.')
    this.conversionRepository.deleteOne(Number(conversionID))
  }
}
