import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
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
  fieldset {
    border: none;
    padding: 0 3.2rem;

    legend {
      font-size: 1.8rem;
      font-weight: bold;
      color: ${({ theme }) => theme['pine-green']};
      margin-bottom: 1.5rem;
      cursor: pointer;
    }

    .checkbox-wrapper {
      display: flex;
      align-items: center;
      gap: 0.9rem;
      font-size: 1.4rem;
      margin-bottom: 0.8rem;
      position: relative;

      input[type='checkbox'] {
        width: 2.4rem;
        height: 2.4rem;
        outline: none;
        background-color: ${({ theme }) => theme['pine-green']};
        position: absolute;
        opacity: 0;
        cursor: pointer;
        z-index: 1;
      }

      .checkmark {
        width: 2.4rem;
        height: 2.4rem;
        background-color: ${({ theme }) => theme['dark-blue-grey']};
        border-radius: 3px;
        cursor: pointer;

        display: flex;
        justify-content: center;
      }

      .check {
        display: none;
        margin-top: 3px;
        width: 6px;
        height: 14px;
        transform: rotate(45deg);
        border-right: 3px solid ${({ theme }) => theme.white};
        border-bottom: 3px solid ${({ theme }) => theme.white};
      }

      input[type='checkbox']:hover ~ .checkmark {
        background-color: ${({ theme }) => theme['pine-green']};
      }

      input[type='checkbox']:checked ~ .checkmark .check {
        display: block;
      }
    }
  }
`
