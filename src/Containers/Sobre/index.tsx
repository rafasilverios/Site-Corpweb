import ContainerMaior from '../../Components/Layouts/ContainerMaior'
import ImgBody from '../../Components/Layouts/Hero/ImgBody/index'
import TituloSite from '../../Components/Layouts/Hero/TituloSite'
import Paragrafo from '../../Components/Layouts/Paragrafo'
import { ConfigDisplayTexto, SobreEstilo } from '../Sobre/styles'

type SobreProps = {
  id: string
}

const Sobre = ({ id }: SobreProps) => {
  return (
    <SobreEstilo id={id}>
      <ContainerMaior>
        <ConfigDisplayTexto>
          <Paragrafo tipo="secundario" paddingTop="16px" fontSize={20}>
            Construímos o melhor
          </Paragrafo>
          <TituloSite fontSize={48} maxWidth={550}>
            Site para sua Empresa
          </TituloSite>
          <Paragrafo tipo="secundario" fontSize={16}>
            Em nossa abordagem de criação de sites, priorizamos a sua visão e
            objetivos. Começamos por entender completamente as suas necessidades
            e metas. Isso nos permite criar um site personalizado que reflete a
            identidade da sua marca e alcança os resultados desejados. Quando se
            trata de desenvolvimento, usamos as mais recentes tecnologias e
            práticas recomendadas para garantir que o seu site seja rápido,
            seguro e eficiente. Além disso, implementamos recursos interativos e
            funcionais para envolver o seu público.
          </Paragrafo>
        </ConfigDisplayTexto>
        <ImgBody
          width="650px"
          scr="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/M%C3%B3dulo%2020%20-%20Construindo%20e-mails%20com%20HTML/Aulas/images/print-lux-ergonomia.PNG"
        />
      </ContainerMaior>
    </SobreEstilo>
  )
}

export default Sobre
