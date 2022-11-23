import { render } from '@testing-library/react'
import { Home } from './Home'
import userEvent from '@testing-library/user-event'

describe('Home page', () => {
  it('Should not able the submit button', async () => {
    const { getByLabelText, getByTestId } = render(<Home />)

    await userEvent.click(getByLabelText('React'))

    expect(getByTestId('btn-submit')).toBeDisabled()
  })

  it('Should able the submit button', async () => {
    const { getByLabelText, getByTestId } = render(<Home />)

    await userEvent.click(getByLabelText('React'))
    await userEvent.click(getByTestId('btn-up'))

    expect(getByTestId('btn-submit')).not.toBeDisabled()
  })

  it('Should show messagem of sucessfully submitted', async () => {
    const { getByLabelText, getByTestId, findByText } = render(<Home />)

    await userEvent.click(getByLabelText('React'))
    await userEvent.click(getByTestId('btn-up'))
    await userEvent.click(getByTestId('btn-submit'))

    expect(
      await findByText('Formulario Enviado com Sucesso!'),
    ).toBeInTheDocument()
  })
})
