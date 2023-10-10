import BotaoBody from '../../Components/Layouts/BotaoBody'
import ArrowDown from '../../Components/Layouts/Hero/ArrowDown'
import ImgBody from '../../Components/Layouts/Hero/ImgBody/index'
import TituloSite from '../../Components/Layouts/Hero/TituloSite'
import Paragrafo from '../../Components/Layouts/Paragrafo'
import { ConfigDisplayTexto, HeroEstilo, Quadrado } from './styles'

type HeroProps = {
  id: string
}

const Hero = ({ id }: HeroProps) => {
  return (
    <HeroEstilo id={id}>
      <ImgBody
        width="860px"
        scr="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/M%C3%B3dulo%2020%20-%20Construindo%20e-mails%20com%20HTML/Aulas/images/print-lux-ergonomia.PNG"
      />
      <ConfigDisplayTexto>
        <Quadrado />
        <TituloSite tipo="principal">Sua Empresa tem um Site?</TituloSite>
        <Paragrafo tipo="principal" paddingTop="16px" fontSize={20}>
          Caso a sua resposta seja não, podemos te ajudar.
        </Paragrafo>
        <Paragrafo tipo="principal" fontSize={20}>
          Nós transformaremos sua ideia em um site incrível. Vamos começar?
        </Paragrafo>
        <BotaoBody href="#">Solicitar Orçamento</BotaoBody>
      </ConfigDisplayTexto>
      <ArrowDown></ArrowDown>
    </HeroEstilo>
  )
}

export default Hero
