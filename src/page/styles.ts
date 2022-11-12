import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme['rebecca-purple']};
  display: flex;
  justify-content: center;
  align-items: center;

  .main-container {
    width: 100%;
    max-width: 560px;
    height: 500px;
    background-color: ${({ theme }) => theme.white};
    border: 1px solid ${({ theme }) => theme['light-blue-grey']};
    box-shadow: 10px 22px 24px rgba(0, 0, 0, 0.5);
  }
`
