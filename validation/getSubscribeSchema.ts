import * as yup from 'yup'

import {
  CHALLENGES_CONSTRAIN,
  CHARACTERS_CONSTRAIN,
  EMAIL_CONSTRAIN,
  PHONE_CONSTRAIN,
  WHITESPACE_CONSTRAIN
} from './constrainRegex'

import { TFunction } from 'next-i18next'

export const getSubscribeSchema = (t: TFunction) =>
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
    mobile_phone_number: yup
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
    type: yup.string().required(t('validation:required')),
    help: yup.string().required(t('validation:required')),
    tool: yup.string().required(t('validation:required')),
    challenges: yup
      .string()
      .required(t('validation:required'))
      .max(200, t('validation:maxCharacterCount', { chars: 200 }))
      .matches(CHALLENGES_CONSTRAIN, t('validation:invalidCharacters'))
  })
