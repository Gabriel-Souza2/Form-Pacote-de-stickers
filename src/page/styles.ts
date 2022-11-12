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
    background-color: ${({ theme }) => theme.white};
    box-shadow: 10px 22px 24px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    overflow: hidden;

    header {
      background-image: url('/img/background-header.png');
      width: 100%;
      height: 185px;
    }
  }
`
