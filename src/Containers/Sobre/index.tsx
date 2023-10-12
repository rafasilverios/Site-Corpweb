import ContainerMaior from '../../Components/Layouts/ContainerMaior'
import ImgBody from '../../Components/Layouts/ImgBody/index'
import TituloSite from '../../Components/Layouts/Hero/TituloSite'
import ImgLines from '../../Components/Layouts/ImgLines'
import ImgStack from '../../Components/Layouts/ImgStack'
import Paragrafo from '../../Components/Layouts/Paragrafo'
import MeiaTela from '../../Components/Layouts/Sobre/MeiaTela'
import {
  ConfigDisplayTexto,
  SobreEstilo,
  DisplayFlexCenter
} from '../Sobre/styles'

export type SobreProps = {
  id?: string
  backgroundColor?: string
  display?: string
  justifyContent?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
}

const Sobre = ({ id }: SobreProps) => {
  return (
    <>
      <SobreEstilo
        display="flex"
        justifyContent="center"
        id={id}
        backgroundColor="#fff"
      >
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
            maxWidth="650px"
            src="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/M%C3%B3dulo%2020%20-%20Construindo%20e-mails%20com%20HTML/Aulas/images/construindo-site.jpg"
          />
        </ContainerMaior>
      </SobreEstilo>
      <SobreEstilo display="block" justifyContent="flex-start">
        <ImgLines
          tipo="esquerdoBaixo"
          src="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/M%C3%B3dulo%2020%20-%20Construindo%20e-mails%20com%20HTML/Aulas/images/riscos_brancos.png"
        />
        <ImgLines
          tipo="direitoCima"
          src="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/M%C3%B3dulo%2020%20-%20Construindo%20e-mails%20com%20HTML/Aulas/images/riscos.png"
        />
        <MeiaTela tipo="secundario" padding="130px 0 0 12vw">
          <ConfigDisplayTexto>
            <TituloSite
              tipo="principal"
              fontSize={48}
              maxWidth={550}
              paddingBottom="16px"
              fontWeight={500}
              margin="0 65px 0 0"
            >
              Como construímos um Site para sua Empresa?
            </TituloSite>
            <Paragrafo tipo="principal" fontSize={16} margin="0 65px 0 0">
              Em nossa abordagem de criação de sites para empresas, priorizamos
              a sua visão e objetivos. Começamos por entender completamente as
              suas necessidades e metas. Isso nos permite criar um site
              personalizado que reflete a identidade da sua marca e alcança os
              resultados desejados. Quando se trata de desenvolvimento, usamos
              as mais recentes tecnologias e práticas recomendadas para garantir
              que o seu site seja rápido, seguro e eficiente. Além disso,
              implementamos recursos interativos e funcionais para envolver o
              seu público.
            </Paragrafo>
          </ConfigDisplayTexto>
        </MeiaTela>
        <DisplayFlexCenter>
          <ImgStack
            padding="8px"
            src="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/M%C3%B3dulo%2020%20-%20Construindo%20e-mails%20com%20HTML/Aulas/images/logo-wordpress.png"
          />
          <ImgStack
            padding="8px"
            src="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/M%C3%B3dulo%2020%20-%20Construindo%20e-mails%20com%20HTML/Aulas/images/html-5.png"
          />
          <ImgStack
            padding="8px"
            src="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/M%C3%B3dulo%2020%20-%20Construindo%20e-mails%20com%20HTML/Aulas/images/css-3.png"
          />
          <ImgStack src="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/M%C3%B3dulo%2020%20-%20Construindo%20e-mails%20com%20HTML/Aulas/images/js.png" />
          <ImgStack src="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/M%C3%B3dulo%2020%20-%20Construindo%20e-mails%20com%20HTML/Aulas/images/logo-typescript.png" />
          <ImgStack src="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/M%C3%B3dulo%2020%20-%20Construindo%20e-mails%20com%20HTML/Aulas/images/logo-react.png" />
        </DisplayFlexCenter>
      </SobreEstilo>
    </>
  )
}

export default Sobre
