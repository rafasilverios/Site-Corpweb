import EstiloGlobal from './styles'
import Menu from './Containers/Menu'
import Hero from './Containers/Hero'
import { ThemeProvider } from 'styled-components'
import tema from './Themes/Tema'
import Sobre from './Containers/Sobre'
import Vantagens from './Containers/Vantagens'
import Orcamento from './Containers/Orcamento'
import Contato from './Containers/Contato'
import Footer from './Containers/Footer'

function App() {
  return (
    <>
      <ThemeProvider theme={tema}>
        <EstiloGlobal />
        <Menu />
        <Hero id="inicio" />
        <Sobre id="sobre" />
        <Vantagens id="vantagens" />
        <Orcamento id="orcamento" />
        <Contato id="contato" />
        <Footer id="footer" />
      </ThemeProvider>
    </>
  )
}

export default App
