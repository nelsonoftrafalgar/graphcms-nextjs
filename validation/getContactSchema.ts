import * as yup from 'yup'

import { CHARACTERS_CONSTRAIN, EMAIL_CONSTRAIN, PHONE_CONSTRAIN, WHITESPACE_CONSTRAIN } from './constrainRegex'

import { TFunction } from 'next-i18next'

export const getContactSchema = (t: TFunction) =>
  yup.object({
    first_name: yup
      .string()
      .required(t('validation:required'))
      .max(100, t('validation:maxCharacterCount', { chars: 100 }))
      .matches(CHARACTERS_CONSTRAIN, t('validation:invalidCharacters'))
      .matches(WHITESPACE_CONSTRAIN, t('validation:whitespace')),
    last_name: yup
      .string()
      .required(t('validation:required'))
      .max(100, t('validation:maxCharacterCount', { chars: 100 }))
      .matches(CHARACTERS_CONSTRAIN, t('validation:invalidCharacters'))
      .matches(WHITESPACE_CONSTRAIN, t('validation:whitespace')),
    email: yup.string().required(t('validation:required')).matches(EMAIL_CONSTRAIN, t('validation:email')),
    phone_number: yup
      .string()
      .required(t('validation:required'))
      .max(20, t('validation:maxCharacterCount', { chars: 20 }))
      .matches(PHONE_CONSTRAIN, t('validation:invalidCharacters')),
    company_name: yup
      .string()
      .required(t('validation:required'))
      .max(100, t('validation:maxCharacterCount', { chars: 100 }))
      .matches(CHARACTERS_CONSTRAIN, t('validation:invalidCharacters'))
      .matches(WHITESPACE_CONSTRAIN, t('validation:whitespace')),
    topic: yup.string().required(t('validation:required'))
  })
