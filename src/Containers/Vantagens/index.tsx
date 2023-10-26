import ImgIcon from '../../Components/Layouts/ImgIcon'
import Paragrafo from '../../Components/Layouts/Paragrafo'
import TituloH3 from '../../Components/Layouts/TituloH3'
import { DisplayGridVantagens, DivMaxWidth, VantagensEstilo } from './styles'

type VantagensProps = {
  id?: string
}

const Vantagens = ({ id }: VantagensProps) => {
  return (
    <VantagensEstilo id={id}>
      <DisplayGridVantagens>
        <DivMaxWidth>
          <ImgIcon
            alt="Imagem vetorizada que ilustra a Visibilidade. Contém uma folha de papel com uma lupa"
            width="58px"
            src="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/Servidor%20de%20Imagens/CorpWeb/img/icons/visibilidade.png"
          />
          <TituloH3
            tipo="principal"
            fontWeight={300}
            fontSize={24}
            margin="16px 0"
          >
            Visibilidade Online
          </TituloH3>
          <Paragrafo margin="0" tipo="principal" fontSize={16}>
            Um site permite que sua empresa seja encontrada facilmente por
            pessoas que buscam seus produtos, serviços ou informações online,
            aumentando a visibilidade da sua marca.
          </Paragrafo>
        </DivMaxWidth>
        <DivMaxWidth>
          <ImgIcon
            alt="Imagem vetorizada que ilustra a disponibilidade online global. Contém um globo terrestre e um smartphone com duas flechas que formam um circulo ligando o globo e o smatphone"
            width="58px"
            src="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/Servidor%20de%20Imagens/CorpWeb/img/icons/acesso-global.png"
          />
          <TituloH3
            tipo="principal"
            fontWeight={300}
            fontSize={24}
            margin="16px 0"
          >
            Disponibilidade
          </TituloH3>
          <Paragrafo margin="0" tipo="principal" fontSize={16}>
            Sua empresa estará disponível 24 horas por dia e 7 dias por semana
            através do site, o que significa que você pode alcançar um público
            muito maior, ultrapassando barreiras geográficas.
          </Paragrafo>
        </DivMaxWidth>
        <DivMaxWidth>
          <ImgIcon
            alt="Imagem vetorizada que ilustra a credibilidade. Contém uma medalha de honra / qualidade"
            width="58px"
            src="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/Servidor%20de%20Imagens/CorpWeb/img/icons/credibilidade.png"
          />
          <TituloH3
            tipo="principal"
            fontWeight={300}
            fontSize={24}
            margin="16px 0"
          >
            Credibilidade
          </TituloH3>
          <Paragrafo margin="0" tipo="principal" fontSize={16}>
            Ter um site profissional transmite credibilidade aos clientes em
            potencial. Um site bem projetado e informativo demonstra que sua
            empresa é séria e confiável.
          </Paragrafo>
        </DivMaxWidth>
        <DivMaxWidth>
          <ImgIcon
            alt="Imagem vetorizada que ilustra O marketing eficiente. Contém uim megafone com imagens que representam redes sociais saindo do seu alto falante"
            width="58px"
            src="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/Servidor%20de%20Imagens/CorpWeb/img/icons/marketing-eficiente.png"
          />
          <TituloH3
            tipo="principal"
            fontWeight={300}
            fontSize={24}
            margin="16px 0"
          >
            Marketing Eficiente
          </TituloH3>
          <Paragrafo margin="0" tipo="principal" fontSize={16}>
            O Site é uma plataforma eficaz para marketing digital. Utilizamos
            estratégias de SEO, marketing de conteúdo e publicidade online para
            direcionar tráfego qualificado para o seu site.
          </Paragrafo>
        </DivMaxWidth>
        <DivMaxWidth>
          <ImgIcon
            alt="Imagem vetorizada que ilustra a comunicação direta com os clientes. Contém dois balões de conversa"
            width="58px"
            src="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/Servidor%20de%20Imagens/CorpWeb/img/icons/comunicacao-direta-3.png"
          />
          <TituloH3
            tipo="principal"
            fontWeight={300}
            fontSize={24}
            margin="16px 0"
          >
            Comunicação Direta
          </TituloH3>
          <Paragrafo margin="0" tipo="principal" fontSize={16}>
            Seu site é um canal de comunicação direta com seus clientes. Você
            pode disponibilizar informações sobre produtos, serviços, preços e
            formas de contato.
          </Paragrafo>
        </DivMaxWidth>
        <DivMaxWidth>
          <ImgIcon
            alt="Imagem vetorizada que ilustra a Análise de dados. Contém uma lupa ampliando os dados de um gráfico"
            width="58px"
            src="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/Servidor%20de%20Imagens/CorpWeb/img/icons/analise-dados.png"
          />
          <TituloH3
            tipo="principal"
            fontWeight={300}
            fontSize={24}
            margin="16px 0"
          >
            Análise de Dados
          </TituloH3>
          <Paragrafo margin="0" tipo="principal" fontSize={16}>
            Com o Google Analytics, você pode acompanhar o desempenho do seu
            site, entender o comportamento dos visitantes e fazer ajustes para
            melhorar a experiência dos usuários.
          </Paragrafo>
        </DivMaxWidth>
      </DisplayGridVantagens>
    </VantagensEstilo>
  )
}

export default Vantagens
