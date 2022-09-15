import * as yup from 'yup'

import { CHARACTERS_CONSTRAIN, EMAIL_CONSTRAIN, PHONE_CONSTRAIN, WHITESPACE_CONSTRAIN } from './constrainRegex'

import { dictionary } from 'localization/dictionary'

const { required, maxCharacterCount, invalidCharacters, whitespace, email } = dictionary.validation

export const contactSchema = yup.object({
  first_name: yup
    .string()
    .required(required)
    .max(100, maxCharacterCount(100))
    .matches(CHARACTERS_CONSTRAIN, invalidCharacters)
    .matches(WHITESPACE_CONSTRAIN, whitespace),
  last_name: yup
    .string()
    .required(required)
    .max(100, maxCharacterCount(100))
    .matches(CHARACTERS_CONSTRAIN, invalidCharacters)
    .matches(WHITESPACE_CONSTRAIN, whitespace),
  email: yup.string().required(required).matches(EMAIL_CONSTRAIN, email),
  phone_number: yup
    .string()
    .required(required)
    .max(20, maxCharacterCount(20))
    .matches(PHONE_CONSTRAIN, invalidCharacters),
  company_name: yup
    .string()
    .required(required)
    .max(100, maxCharacterCount(100))
    .matches(CHARACTERS_CONSTRAIN, invalidCharacters)
    .matches(WHITESPACE_CONSTRAIN, whitespace),
  topic: yup.string().required(required)
})
