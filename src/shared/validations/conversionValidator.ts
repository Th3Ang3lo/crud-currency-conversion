import * as yup from 'yup'

import { BadRequestException } from '@shared/exceptions/BadRequestException'

import { IConversionRequestData } from '@shared/dtos/conversion'

export const validateCreateConversion = async (conversionData: IConversionRequestData): Promise<void> => {
  try {
    const schema = yup.object({
      currency: yup.string()
        .min(3, 'A moeda a ser convertida deve ter no mínimo 3 caracteres.')
        .max(3, 'A moeda a ser convertida deve ter no máximo 3 caracteres.')
        .required('Campo currency obrigatorio.'),
      convertToCurrency: yup.string()
        .min(3, 'A moeda a ser convertida deve ter no mínimo 3 caracteres.')
        .max(3, 'A moeda a ser convertida deve ter no máximo 3 caracteres.')
        .required('Campo convertToCurrency obrigatorio.'),
      value: yup.number()
        .typeError('O campo value deve conter um valor numérico')
        .required('Campo value obrigatorio.')
    })
    await schema.validate(conversionData)
  } catch (err) {
    throw new BadRequestException(err.message, {
      [err.path]: err.message
    })
  }
}

export const validateConversionID = async (conversionID: number): Promise<void> => {
  try {
    const schema = yup.object({
      conversionID: yup.number()
        .typeError('O campo id deve conter um valor numérico')
        .required('Campo id obrigatorio.')
    })
    await schema.validate({ conversionID })
  } catch (err) {
    throw new BadRequestException(err.message, {
      [err.path]: err.message
    })
  }
}
