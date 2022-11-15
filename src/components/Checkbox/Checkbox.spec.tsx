import { render } from '@testing-library/react'
import { Checkbox } from '.'

describe('Checkbox Component', () => {
  it('should render checboxs', () => {
    const { getByText } = render(<Checkbox />)

    expect(getByText('React')).toBeInTheDocument()
    expect(getByText('Vue')).toBeInTheDocument()
    expect(getByText('Angular')).toBeInTheDocument()
  })
})
