import styled from 'styled-components'

export const FieldContainer = styled.fieldset`
  border: none;
  padding: 0 3.2rem;

  legend {
    font-size: 1.8rem;
    font-weight: bold;
    color: ${({ theme }) => theme['pine-green']};
    margin-bottom: 1.5rem;
    cursor: pointer;
  }
`
