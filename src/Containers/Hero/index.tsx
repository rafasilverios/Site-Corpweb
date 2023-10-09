import Container from '../../Components/Layouts/ContainerEstilo'
import ImgBody from '../../Components/Layouts/ImgBody'
import { HeroEstilo } from './styles'

type HeroProps = {
  id: string
}

const Hero = ({ id }: HeroProps) => {
  return (
    <HeroEstilo id={id}>
      <Container>
        <ImgBody scr="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/M%C3%B3dulo%2020%20-%20Construindo%20e-mails%20com%20HTML/Aulas/images/corpweb-logo.png" />
      </Container>
    </HeroEstilo>
  )
}

export default Hero
