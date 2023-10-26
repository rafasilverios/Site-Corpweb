import BotaoBody from '../../Components/Layouts/BotaoBody'
import ArrowDown from '../../Components/Layouts/Hero/ArrowDown'
import ImgHero from '../../Components/Layouts/ImgHero/index'
import TituloSite from '../../Components/Layouts/Hero/TituloSite'
import Paragrafo from '../../Components/Layouts/Paragrafo'
import { ConfigDisplayTexto, HeroEstilo, Quadrado } from './styles'

type HeroProps = {
  id: string
}

const Hero = ({ id }: HeroProps) => {
  return (
    <HeroEstilo id={id}>
      <a href="https://luxergonomia.com.br/" target="_blank" rel="noreferrer">
        <ImgHero
          width="860px"
          src="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/Servidor%20de%20Imagens/CorpWeb/img/site-para-empresas.webp"
        />
      </a>
      <ConfigDisplayTexto>
        <Quadrado />
        <TituloSite tipo="principal">Sua Empresa tem um Site?</TituloSite>
        <Paragrafo tipo="principal" paddingTop="16px" fontSize={20} margin="0">
          Caso a sua resposta seja não, podemos te ajudar.
        </Paragrafo>
        <Paragrafo tipo="principal" fontSize={20} margin="0">
          Nós transformaremos sua ideia em um site incrível. Vamos começar?
        </Paragrafo>
        <BotaoBody href="#orcamento">Solicitar Orçamento</BotaoBody>
      </ConfigDisplayTexto>
      <ArrowDown></ArrowDown>
    </HeroEstilo>
  )
}

export default Hero
