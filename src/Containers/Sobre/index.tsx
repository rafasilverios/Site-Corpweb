import ContainerMaior from '../../Components/Layouts/ContainerMaior'
import ImgBody from '../../Components/Layouts/Hero/ImgBody/index'
import TituloSite from '../../Components/Layouts/Hero/TituloSite'
import Paragrafo from '../../Components/Layouts/Paragrafo'
import MeiaTela from '../../Components/Layouts/Sobre/MeiaTela'
import { ConfigDisplayTexto, SobreEstilo } from '../Sobre/styles'

export type SobreProps = {
  id?: string
  backgroundColor?: string
}

const Sobre = ({ id }: SobreProps) => {
  return (
    <>
      <SobreEstilo id={id}>
        <ContainerMaior>
          <ConfigDisplayTexto>
            <Paragrafo tipo="secundario" paddingBottom="4px" fontSize={20}>
              Construímos o melhor
            </Paragrafo>
            <TituloSite
              fontSize={48}
              maxWidth={550}
              paddingBottom="32px"
              fontWeight={500}
            >
              Site para sua Empresa
            </TituloSite>
            <Paragrafo tipo="secundario" fontSize={16}>
              Em nossa abordagem de criação de sites, priorizamos a sua visão e
              objetivos. Começamos por entender completamente as suas
              necessidades e metas. Isso nos permite criar um site personalizado
              que reflete a identidade da sua marca e alcança os resultados
              desejados. Quando se trata de desenvolvimento, usamos as mais
              recentes tecnologias e práticas recomendadas para garantir que o
              seu site seja rápido, seguro e eficiente. Além disso,
              implementamos recursos interativos e funcionais para envolver o
              seu público.
            </Paragrafo>
          </ConfigDisplayTexto>
          <ImgBody
            width="650px"
            scr="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/M%C3%B3dulo%2020%20-%20Construindo%20e-mails%20com%20HTML/Aulas/images/construindo-site.jpg"
          />
        </ContainerMaior>
      </SobreEstilo>
      <SobreEstilo backgroundColor="#FFA928">
        <MeiaTela tipo="secundario" padding="130px 65px 130px 12vw">
          <ConfigDisplayTexto>
            <TituloSite
              tipo="principal"
              fontSize={48}
              maxWidth={550}
              paddingBottom="32px"
              fontWeight={500}
            >
              Como construímos um Site para sua Empresa?
            </TituloSite>
            <Paragrafo tipo="principal" fontSize={16}>
              Em nossa abordagem de criação de sites, priorizamos a sua visão e
              objetivos. Começamos por entender completamente as suas
              necessidades e metas. Isso nos permite criar um site personalizado
              que reflete a identidade da sua marca e alcança os resultados
              desejados. Quando se trata de desenvolvimento, usamos as mais
              recentes tecnologias e práticas recomendadas para garantir que o
              seu site seja rápido, seguro e eficiente. Além disso,
              implementamos recursos interativos e funcionais para envolver o
              seu público.
            </Paragrafo>
          </ConfigDisplayTexto>
        </MeiaTela>
      </SobreEstilo>
    </>
  )
}

export default Sobre
