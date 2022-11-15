import { render } from '@testing-library/react'
import { Checkboxes } from '.'

describe('Checkboxes Component', () => {
  it('should render checkboxes', () => {
    const { getByText } = render(
      <Checkboxes onCheckedCheckboxes={(type) => {}} />,
    )

    expect(getByText('React')).toBeInTheDocument()
  })
})
