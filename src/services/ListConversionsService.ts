import { Conversion } from '@models/Conversion'

import { IConversionRepository } from '@repositories/IConversionRepository'

export class ListConversionsService {
  constructor (
    private readonly conversionRepository: IConversionRepository
  ) {}

  public async execute (): Promise<Conversion[]> {
    const conversions = this.conversionRepository.findAll()

    return conversions
  }
}
