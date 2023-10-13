import EstiloGlobal from './styles'
import Menu from './Containers/Menu'
import Hero from './Containers/Hero'
import { ThemeProvider } from 'styled-components'
import tema from './Themes/Tema'
import Sobre from './Containers/Sobre'
import Vantagens from './Containers/Vantagens'

function App() {
  return (
    <>
      <ThemeProvider theme={tema}>
        <EstiloGlobal />
        <Menu />
        <Hero id="inicio" />
        <Sobre id="sobre" />
        <Vantagens id="vantagens" />
      </ThemeProvider>
    </>
  )
}

export default App
