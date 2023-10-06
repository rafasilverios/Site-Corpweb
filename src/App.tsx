import EstiloGlobal from './styles'
import Menu from './Containers/Menu'
import Container from './Components/Layouts/ContainerEstilo'
// import Hero from './Containers/Hero'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Menu />
      <Container>{/* <Hero /> */}</Container>
    </>
  )
}

export default App
