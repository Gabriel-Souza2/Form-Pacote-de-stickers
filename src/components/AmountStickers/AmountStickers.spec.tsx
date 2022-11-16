import { render } from '@testing-library/react'
import { AmountStickers } from '.'

describe('Amount stickers components', () => {
  it('should render Amount Components', () => {
    const { getByText, getByTestId, getByDisplayValue } = render(
      <AmountStickers />,
    )

    const title = getByText('Quantas Stickers de cada?')
    const buttonDown = getByTestId('btn-down')
    const buttonUp = getByTestId('btn-up')
    const amountInput = getByDisplayValue(0)

    expect(title).toBeInTheDocument()
    expect(buttonDown).toBeInTheDocument()
    expect(buttonUp).toBeInTheDocument()
    expect(amountInput).toBeInTheDocument()
  })
})
