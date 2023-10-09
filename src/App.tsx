import EstiloGlobal from './styles'
import Menu from './Containers/Menu'
// import Container from './Components/Layouts/ContainerEstilo'
import Hero from './Containers/Hero'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Menu />
      <Hero id="inicio" />
    </>
  )
}

export default App
