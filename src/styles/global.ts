import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 62.5%;
    }
    
    :root {
        font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
        line-height: 24px;
        font-weight: 400;



        color: ${({ theme }) => theme['pine-green']};
        background-color: ${({ theme }) => theme.white};
        
        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }

    :focus {
        outline: 0;
        box-shadow: none;
    }


`
