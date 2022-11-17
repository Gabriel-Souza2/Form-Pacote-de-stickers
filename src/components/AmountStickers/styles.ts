import styled from 'styled-components'
import { FieldContainer } from '../../styles/commonStyles'

export const AmountStickersContainer = styled(FieldContainer)`
  display: flex;
  align-items: center;
  gap: 8px;
  button {
    width: 4.2rem;
    height: 4.2rem;
    background-color: ${({ theme }) => theme['dark-grey-blue']};
    border: none;
    border-radius: 5px;
    cursor: pointer;
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      background-color: ${({ theme }) => theme['pine-green']};
    }
  }

  .sub {
    width: 2.3rem;
    height: 0.5rem;
    background-color: ${({ theme }) => theme.white};
  }

  .add::after {
    content: ' ';
    display: inline-block;
    width: 0.5rem;
    height: 2.3rem;
    background-color: ${({ theme }) => theme.white};
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .add::before {
    content: ' ';
    display: inline-block;
    width: 2.3rem;
    height: 0.5rem;
    background-color: ${({ theme }) => theme.white};
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  .amount-input {
    width: 6rem;
    height: 4.2rem;

    text-align: center;
    color: ${({ theme }) => theme['pine-green']};
    font-weight: bold;
    font-size: 2rem;

    border-radius: 5px;
    border: 1px solid ${({ theme }) => theme['dark-grey-blue']};
    background-color: ${({ theme }) => theme['light-sky-blue']};
    -webkit-appearance: textfield;
    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
`
