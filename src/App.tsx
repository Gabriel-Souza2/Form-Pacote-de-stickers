import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/default/theme'

export function App() {
  return <ThemeProvider theme={defaultTheme}></ThemeProvider>
}
