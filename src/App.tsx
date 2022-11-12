import { ThemeProvider } from 'styled-components'
import { Home } from './page/Home'
import { defaultTheme } from './styles/default/theme'
import { GlobalStyle } from './styles/global'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Home />
    </ThemeProvider>
  )
}
