export const dictionary = {
  validation: {
    required: 'This filed is required',
    invalidCharacters: 'Contains invalid characters',
    email: 'Must be a valid email',
    whitespace: 'Should not start or end with whitespace',
    serverError: 'Server error',
    maxCharacterCount: (chars: number) => `Max ${chars} characters`
  }
}
