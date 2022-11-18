import { render, fireEvent } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { AmountStickers } from '.'

describe('Amount stickers components', () => {
  it('should render Amount Components', () => {
    const { getByText, getByTestId, getByDisplayValue } = render(
      <AmountStickers />,
    )

    const title = getByText('Quantas Stickers de cada?')
    const btnSub = getByTestId('btn-down')
    const btnAdd = getByTestId('btn-up')
    const amountInput = getByDisplayValue(0)

    expect(title).toBeInTheDocument()
    expect(btnSub).toBeInTheDocument()
    expect(btnAdd).toBeInTheDocument()
    expect(amountInput).toBeInTheDocument()
  })

  it('Should add one more stickers', async () => {
    const { getByTestId, getByDisplayValue } = render(<AmountStickers />)

    const amountInput = getByDisplayValue('0') as HTMLInputElement

    await userEvent.click(getByTestId('btn-up'))

    expect(amountInput.value).toBe('1')
  })

  it('Should set the value write in input for user', async () => {
    const { getByTestId } = render(<AmountStickers />)

    const amountInput = getByTestId('amount-input') as HTMLInputElement

    fireEvent.change(amountInput, { target: { value: 30 } })

    expect(amountInput.value).toBe('30')
  })

  it('Should not decrement input value if input value is 0', async () => {
    const { getByTestId } = render(<AmountStickers />)

    const amountInput = getByTestId('amount-input') as HTMLInputElement

    await userEvent.click(getByTestId('btn-down'))

    expect(amountInput.value).toBe('0')
  })

  it('Should decrement input value if input value is more than 1', async () => {
    const { getByTestId } = render(<AmountStickers />)

    const amountInput = getByTestId('amount-input') as HTMLInputElement

    fireEvent.change(amountInput, { target: { value: 2 } })

    await userEvent.click(getByTestId('btn-down'))

    expect(amountInput.value).toBe('1')
  })
})
