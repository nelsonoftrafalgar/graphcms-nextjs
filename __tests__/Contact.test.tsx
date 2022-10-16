import '@testing-library/jest-dom/extend-expect'

import { render, screen } from '@testing-library/react'

import Contact from 'sections/Contact'
import userEvent from '@testing-library/user-event'

const mockSelect = {
  name: 'topic',
  selectOptions: [
    { id: '1', value: 'test option 1' },
    { id: '2', value: 'test option 2' }
  ]
}

const setup = (id: string) => {
  render(<Contact topicSelect={mockSelect} />)
  return {
    submit: screen.getByText('contact_us:button'),
    input: screen.getByLabelText(id)
  }
}

const getError = (id: string) => screen.findByTestId(`${id}_error`)

describe('first_name input', () => {
  const ID = 'first_name'
  it('is required', async () => {
    const { submit } = setup(ID)
    userEvent.click(submit)
    expect(await getError(ID)).toHaveTextContent('validation:required')
  })

  it('handles invalid characters', async () => {
    const { submit, input } = setup(ID)
    await userEvent.type(input, '@David Bowie')
    userEvent.click(submit)
    expect(await getError(ID)).toHaveTextContent('validation:invalidCharacters')
  })

  it('handles max characters', async () => {
    const { submit, input } = setup(ID)
    await userEvent.type(
      input,
      'IzQoOzHBbXv8EgYhgTlThVROppfYxJBEFPXtjlHPbGiBBBoxVMGGFGmdd5PDLxg5J3BC9ehBkgpOpFebdZxv91Ah3hn1fODy710G9'
    )
    userEvent.click(submit)
    expect(await getError(ID)).toHaveTextContent('validation:maxCharacterCount')
  })

  it('handles white spaces', async () => {
    const { submit, input } = setup(ID)
    await userEvent.type(input, 'David Bowie ')
    userEvent.click(submit)
    expect(await getError(ID)).toHaveTextContent('validation:whitespace')
  })
})

describe('last_name input', () => {
  const ID = 'last_name'
  it('is required', async () => {
    const { submit } = setup(ID)
    userEvent.click(submit)
    expect(await getError(ID)).toHaveTextContent('validation:required')
  })

  it('handles invalid characters', async () => {
    const { submit, input } = setup(ID)
    await userEvent.type(input, '@David Bowie')
    userEvent.click(submit)
    expect(await getError(ID)).toHaveTextContent('validation:invalidCharacters')
  })

  it('handles max characters', async () => {
    const { submit, input } = setup(ID)
    await userEvent.type(
      input,
      'IzQoOzHBbXv8EgYhgTlThVROppfYxJBEFPXtjlHPbGiBBBoxVMGGFGmdd5PDLxg5J3BC9ehBkgpOpFebdZxv91Ah3hn1fODy710G9'
    )
    userEvent.click(submit)
    expect(await getError(ID)).toHaveTextContent('validation:maxCharacterCount')
  })

  it('handles white spaces', async () => {
    const { submit, input } = setup(ID)
    await userEvent.type(input, 'David Bowie ')
    userEvent.click(submit)
    expect(await getError(ID)).toHaveTextContent('validation:whitespace')
  })
})

describe('company_name input', () => {
  const ID = 'company_name'
  it('is required', async () => {
    const { submit } = setup(ID)
    userEvent.click(submit)
    expect(await getError(ID)).toHaveTextContent('validation:required')
  })

  it('handles invalid characters', async () => {
    const { submit, input } = setup(ID)
    await userEvent.type(input, '@David Bowie')
    userEvent.click(submit)
    expect(await getError(ID)).toHaveTextContent('validation:invalidCharacters')
  })

  it('handles max characters', async () => {
    const { submit, input } = setup(ID)
    await userEvent.type(
      input,
      'IzQoOzHBbXv8EgYhgTlThVROppfYxJBEFPXtjlHPbGiBBBoxVMGGFGmdd5PDLxg5J3BC9ehBkgpOpFebdZxv91Ah3hn1fODy710G9'
    )
    userEvent.click(submit)
    expect(await getError(ID)).toHaveTextContent('validation:maxCharacterCount')
  })

  it('handles white spaces', async () => {
    const { submit, input } = setup(ID)
    await userEvent.type(input, 'David Bowie ')
    userEvent.click(submit)
    expect(await getError(ID)).toHaveTextContent('validation:whitespace')
  })
})

describe('phone_number input', () => {
  const ID = 'phone_number'
  it('is required', async () => {
    const { submit } = setup(ID)
    userEvent.click(submit)
    expect(await getError(ID)).toHaveTextContent('validation:required')
  })

  it('handles invalid characters', async () => {
    const { submit, input } = setup(ID)
    await userEvent.type(input, '3428707kdfb')
    userEvent.click(submit)
    expect(await getError(ID)).toHaveTextContent('validation:invalidCharacters')
  })

  it('handles max characters', async () => {
    const { submit, input } = setup(ID)
    await userEvent.type(input, '127536975616981693696468467649847162')
    userEvent.click(submit)
    expect(await getError(ID)).toHaveTextContent('validation:maxCharacterCount')
  })
})

describe('email input', () => {
  const ID = 'email'
  it('is required', async () => {
    const { submit } = setup(ID)
    userEvent.click(submit)
    expect(await getError(ID)).toHaveTextContent('validation:required')
  })
})

describe('topic input', () => {
  const ID = 'topic'
  it('is required', async () => {
    const { submit } = setup(ID)
    userEvent.click(submit)
    expect(await getError(ID)).toHaveTextContent('validation:required')
  })
})
