import styled, { keyframes } from 'styled-components'
import { FieldContainer } from '../styles/commonStyles'

export const HomeContainer = styled.div`
  height: 100%;
  background-color: ${({ theme }) => theme['rebecca-purple']};
  display: flex;
  justify-content: center;
  align-items: center;

  .content-container {
    width: 100%;
    max-width: 56rem;
    background-color: ${({ theme }) => theme.white};
    box-shadow: 10px 22px 24px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    overflow: hidden;

    header {
      background-image: url('/img/background-header.png');
      width: 100%;
      height: 18.5rem;
      padding: 23px 31px;
    }

    .title-wrapper {
      width: 22rem;
      line-height: 3.3rem;

      span {
        display: block;
        color: ${({ theme }) => theme.white};

        &:first-child {
          font-weight: 400;
          font-size: 2.3rem;
        }

        &:last-child {
          font-size: 2.4rem;
          font-weight: bold;
        }
      }
    }
  }
`

export const FormStickers = styled.form`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`
export const NoteContainer = styled(FieldContainer)`
  textarea {
    resize: none;
    width: 100%;
    height: 14rem;
    border: 1px solid ${({ theme }) => theme['dark-grey-blue']};
    border-radius: 5px;
    background-color: ${({ theme }) => theme['light-sky-blue']};
    color: ${({ theme }) => theme['pine-green']};
    padding: 1.6rem;
  }
`

const rotate = keyframes`
  to {
    transform: rotate(360deg);

  }
`

export const FooterFormContainer = styled.footer`
  width: 100%;
  height: 10rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${({ theme }) => theme['light-sky-blue']};
  padding: 3.2rem;
`
interface SubmitButtonProps {
  sending: boolean
}

export const SubmitButton = styled.button<SubmitButtonProps>`
  width: 13.3rem;
  height: 3.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme, sending }) =>
    sending ? theme['pine-green'] : theme['dark-grey-blue']};
  border: none;
  border-radius: 8px;
  cursor: pointer;

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme['pine-green']};
  }

  &:disabled {
    opacity: ${({ sending }) => (sending ? 1 : 0.2)};
  }

  .submit-text {
    display: ${({ sending }) => (!sending ? 'block' : 'none')};
    color: ${({ theme }) => theme.white};
    font-size: 1.8rem;
    font-weight: bold;
  }

  .spinner {
    width: 2rem;
    height: 2rem;
    display: ${({ sending }) => (sending ? 'block' : 'none')};
    border: 4px solid ${({ theme }) => theme['dark-grey-blue']};
    border-left-color: ${({ theme }) => theme.white};
    border-radius: 50%;
    animation: ${rotate} 1.5s linear infinite;
  }
`
