import BotaoBody from '../../Components/Layouts/BotaoBody'
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
        scr="https://raw.githubusercontent.com/rafasilverios/Site-Corpweb/main/src/img/print-lux-ergonomia.PNG?token=GHSAT0AAAAAACC3ZCEMMOPJTZ6OD2W4EGS2ZJEJ63Q"
      />
      <ConfigDisplayTexto>
        <Quadrado />
        <TituloSite>Sua Empresa tem um Site?</TituloSite>
        <Paragrafo paddingTop="32px" fontSize={24}>
          Caso a sua resposta seja não, podemos te ajudar.
        </Paragrafo>
        <Paragrafo fontSize={24}>
          Nós transformaremos sua ideia em um site incrível. Vamos começar?
        </Paragrafo>
        <BotaoBody href="#">Solicitar Orçamento</BotaoBody>
      </ConfigDisplayTexto>
    </HeroEstilo>
  )
}

export default Hero
