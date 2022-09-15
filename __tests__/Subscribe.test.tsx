import '@testing-library/jest-dom/extend-expect'

import { render, screen } from '@testing-library/react'

import Subscribe from 'sections/Subscribe'
import { dictionary } from 'localization/dictionary'
import userEvent from '@testing-library/user-event'

const mockSelect = {
  name: 'topic',
  selectOptions: [
    { id: '1', value: 'test option 1' },
    { id: '2', value: 'test option 2' }
  ]
}

const setup = (id: string) => {
  render(<Subscribe toolSelect={mockSelect} helpSelect={mockSelect} typeSelect={mockSelect} />)
  return {
    submit: screen.getByText('Submit'),
    input: screen.getByLabelText(id)
  }
}

const getError = (id: string) => screen.findByTestId(`${id}_error`)

describe('first_name input', () => {
  const ID = 'first_name'
  it('is required', async () => {
    const { submit } = setup(ID)
    userEvent.click(submit)
    expect(await getError(ID)).toHaveTextContent(dictionary.validation.required)
  })

  it('handles invalid characters', async () => {
    const { submit, input } = setup(ID)
    await userEvent.type(input, '@David Bowie')
    userEvent.click(submit)
    expect(await getError(ID)).toHaveTextContent(dictionary.validation.invalidCharacters)
  })

  it('handles max characters', async () => {
    const { submit, input } = setup(ID)
    await userEvent.type(
      input,
      'IzQoOzHBbXv8EgYhgTlThVROppfYxJBEFPXtjlHPbGiBBBoxVMGGFGmdd5PDLxg5J3BC9ehBkgpOpFebdZxv91Ah3hn1fODy710G9'
    )
    userEvent.click(submit)
    expect(await getError(ID)).toHaveTextContent(dictionary.validation.maxCharacterCount(100))
  })

  it('handles white spaces', async () => {
    const { submit, input } = setup(ID)
    await userEvent.type(input, 'David Bowie ')
    userEvent.click(submit)
    expect(await getError(ID)).toHaveTextContent(dictionary.validation.whitespace)
  })
})

describe('last_name input', () => {
  const ID = 'last_name'
  it('is required', async () => {
    const { submit } = setup(ID)
    userEvent.click(submit)
    expect(await getError(ID)).toHaveTextContent(dictionary.validation.required)
  })

  it('handles invalid characters', async () => {
    const { submit, input } = setup(ID)
    await userEvent.type(input, '@David Bowie')
    userEvent.click(submit)
    expect(await getError(ID)).toHaveTextContent(dictionary.validation.invalidCharacters)
  })

  it('handles max characters', async () => {
    const { submit, input } = setup(ID)
    await userEvent.type(
      input,
      'IzQoOzHBbXv8EgYhgTlThVROppfYxJBEFPXtjlHPbGiBBBoxVMGGFGmdd5PDLxg5J3BC9ehBkgpOpFebdZxv91Ah3hn1fODy710G9'
    )
    userEvent.click(submit)
    expect(await getError(ID)).toHaveTextContent(dictionary.validation.maxCharacterCount(100))
  })

  it('handles white spaces', async () => {
    const { submit, input } = setup(ID)
    await userEvent.type(input, 'David Bowie ')
    userEvent.click(submit)
    expect(await getError(ID)).toHaveTextContent(dictionary.validation.whitespace)
  })
})

describe('company_name input', () => {
  const ID = 'company_name'
  it('is required', async () => {
    const { submit } = setup(ID)
    userEvent.click(submit)
    expect(await getError(ID)).toHaveTextContent(dictionary.validation.required)
  })

  it('handles invalid characters', async () => {
    const { submit, input } = setup(ID)
    await userEvent.type(input, '@David Bowie')
    userEvent.click(submit)
    expect(await getError(ID)).toHaveTextContent(dictionary.validation.invalidCharacters)
  })

  it('handles max characters', async () => {
    const { submit, input } = setup(ID)
    await userEvent.type(
      input,
      'IzQoOzHBbXv8EgYhgTlThVROppfYxJBEFPXtjlHPbGiBBBoxVMGGFGmdd5PDLxg5J3BC9ehBkgpOpFebdZxv91Ah3hn1fODy710G9'
    )
    userEvent.click(submit)
    expect(await getError(ID)).toHaveTextContent(dictionary.validation.maxCharacterCount(100))
  })

  it('handles white spaces', async () => {
    const { submit, input } = setup(ID)
    await userEvent.type(input, 'David Bowie ')
    userEvent.click(submit)
    expect(await getError(ID)).toHaveTextContent(dictionary.validation.whitespace)
  })
})

describe('mobile_phone_number input', () => {
  const ID = 'mobile_phone_number'
  it('is required', async () => {
    const { submit } = setup(ID)
    userEvent.click(submit)
    expect(await getError(ID)).toHaveTextContent(dictionary.validation.required)
  })

  it('handles invalid characters', async () => {
    const { submit, input } = setup(ID)
    await userEvent.type(input, '3428707kdfb')
    userEvent.click(submit)
    expect(await getError(ID)).toHaveTextContent(dictionary.validation.invalidCharacters)
  })

  it('handles max characters', async () => {
    const { submit, input } = setup(ID)
    await userEvent.type(input, '127536975616981693696468467649847162')
    userEvent.click(submit)
    expect(await getError(ID)).toHaveTextContent(dictionary.validation.maxCharacterCount(20))
  })
})

describe('email input', () => {
  const ID = 'email'
  it('is required', async () => {
    const { submit } = setup(ID)
    userEvent.click(submit)
    expect(await getError(ID)).toHaveTextContent(dictionary.validation.required)
  })
})

describe('tool input', () => {
  const ID = 'tool'
  it('is required', async () => {
    const { submit } = setup(ID)
    userEvent.click(submit)
    expect(await getError(ID)).toHaveTextContent(dictionary.validation.required)
  })
})

describe('help input', () => {
  const ID = 'help'
  it('is required', async () => {
    const { submit } = setup(ID)
    userEvent.click(submit)
    expect(await getError(ID)).toHaveTextContent(dictionary.validation.required)
  })
})

describe('type input', () => {
  const ID = 'type'
  it('is required', async () => {
    const { submit } = setup(ID)
    userEvent.click(submit)
    expect(await getError(ID)).toHaveTextContent(dictionary.validation.required)
  })
})

describe('challenges input', () => {
  const ID = 'challenges'
  it('is required', async () => {
    const { submit } = setup(ID)
    userEvent.click(submit)
    expect(await getError(ID)).toHaveTextContent(dictionary.validation.required)
  })

  it('handles invalid characters', async () => {
    const { submit, input } = setup(ID)
    await userEvent.type(input, '@David Bowie')
    userEvent.click(submit)
    expect(await getError(ID)).toHaveTextContent(dictionary.validation.invalidCharacters)
  })

  it('handles max characters', async () => {
    const { submit, input } = setup(ID)
    await userEvent.type(
      input,
      'FG9Mqe1Q4zhFY83I8BUwT1zwNKL9cSg5NZSRdX0mUe7JoeeVPJFIsdukDoTzdSP1Q1NJORiR7xz3RnTuyYuRossqRvBNLs9mfNDeD0dC3BxGo85gOE8voumm FG9Mqe1Q4zhFY83I8BUwT1zwNKL9cSg5NZSRdX0mUe7JoeeVPJFIsdukDoTzdSP1Q1NJORiR7xz3RnTuyYuRossqRvBNLs9mfNDeD0dC3BxGo85gOE8voumm'
    )
    userEvent.click(submit)
    expect(await getError(ID)).toHaveTextContent(dictionary.validation.maxCharacterCount(200))
  })
})
