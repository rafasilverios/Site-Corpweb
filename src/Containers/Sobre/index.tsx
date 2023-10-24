import ContainerMaior from '../../Components/Layouts/ContainerMaior'
import ImgLines from '../../Components/Layouts/ImgLines'
import ImgStack from '../../Components/Layouts/ImgStack'
import Paragrafo from '../../Components/Layouts/Paragrafo'
import MeiaTela from '../../Components/Layouts/Sobre/MeiaTela'
import {
  ConfigDisplayTexto,
  SobreEstilo,
  DisplayFlexCenter
} from '../Sobre/styles'
import TituloH2 from '../../Components/Layouts/TituloH2'
import ImgSobre from '../../Components/Layouts/ImgSobre'

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

  marginBottom?: string
  textAlign?: string
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
            <TituloH2
              fontSize={48}
              maxWidth={550}
              paddingBottom="32px"
              fontWeight={500}
            >
              Site para sua Empresa
            </TituloH2>
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
          <ImgSobre
            maxWidth="675px"
            src="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/Servidor%20de%20Imagens/CorpWeb/img/site%20para%20empresa.jpg"
          />
        </ContainerMaior>
      </SobreEstilo>
      <SobreEstilo display="block" justifyContent="flex-start">
        <ImgLines
          tipo="esquerdoBaixo"
          src="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/Servidor%20de%20Imagens/CorpWeb/img/site-para-empresa.png"
        />
        <ImgLines
          tipo="direitoCima"
          src="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/Servidor%20de%20Imagens/CorpWeb/img/site-para-empresas.png"
        />
        <MeiaTela tipo="secundario" padding="130px 0 0 12vw">
          <ConfigDisplayTexto>
            <TituloH2
              tipo="principal"
              fontSize={48}
              maxWidth={550}
              paddingBottom="16px"
              fontWeight={500}
              margin="0 65px 0 0"
            >
              Como construímos um Site para sua Empresa?
            </TituloH2>
            <Paragrafo tipo="principal" fontSize={16} margin="0 65px 0 0">
              Nós utilizamos as mais recentes tecnologias e as melhores
              linguagens de programação para que seu site se adeque a todas as
              plataformas sendo altamente responsivo, também extremamente rápido
              e eficiente para ranquear muito bem no google. Tudo isso com as
              melhores práticas para que o site seja totalmente seguro para sua
              empresa e seus clientes.
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
      <SobreEstilo
        display="block"
        justifyContent="center"
        backgroundColor="#fff"
      >
        <ContainerMaior>
          <ImgSobre
            maxWidth="675px"
            src="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/23b003c68fc1724725c3ea126424e08db94acbb7/Servidor%20de%20Imagens/CorpWeb/img/vetor-site-para-empresa.svg"
          />
          <ConfigDisplayTexto>
            <TituloH2
              fontSize={48}
              maxWidth={550}
              paddingBottom="32px"
              fontWeight={500}
            >
              Sua empresa será vista e lembrada!
            </TituloH2>
            <Paragrafo tipo="secundario" fontSize={16}>
              Você sabia que mecanismos de busca, como o Google, são portas de
              entrada para milhões de potenciais clientes. Quando alguém busca
              por um produto ou serviço que sua empresa oferece, estar nas
              primeiras posições dos resultados de pesquisa pode fazer toda a
              diferença? É como se sua empresa estivesse em destaque na vitrine
              de uma rua movimentada, pronto para atrair visitantes.
            </Paragrafo>
          </ConfigDisplayTexto>
        </ContainerMaior>
      </SobreEstilo>
    </>
  )
}

export default Sobre
