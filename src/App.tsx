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

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'

function App() {
  return (
    <>
      <ThemeProvider theme={tema}>
        <EstiloGlobal />
        <Menu id="cabecalho" />
        <div data-bs-spy="scroll" data-bs-target="cabecalho">
          <Hero id="inicio" data-bs-offset="50" />
          <Sobre id="sobre" data-bs-offset="50" />
          <Vantagens id="vantagens" data-bs-offset="50" />
          <Orcamento id="orcamento" data-bs-offset="50" />
          <Contato id="contato" data-bs-offset="50" />
          <Footer id="footer" data-bs-offset="50" />
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
