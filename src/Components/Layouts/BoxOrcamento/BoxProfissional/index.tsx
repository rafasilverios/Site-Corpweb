import { useTheme } from 'styled-components'
import TituloH3 from '../../TituloH3'
import { BoxConteudoEstilo, BoxItem, BoxLista, BoxTitulo } from '../styles'
import Paragrafo from '../../Paragrafo'
import BotaoBody from '../../BotaoBody'

const BoxProfissional = () => {
  const theme = useTheme()
  return (
    <BoxConteudoEstilo>
      <BoxTitulo>
        <TituloH3
          tipo="principal"
          fontSize={24}
          fontWeight={300}
          backgroundColor={theme.corSecundaria}
          padding="16px"
        >
          Profissional
        </TituloH3>
      </BoxTitulo>
      <BoxLista>
        <Paragrafo
          margin="0"
          tipo="principal"
          fontWeight="300"
          paddingBottom="24px"
        >
          Escolha entre um dos modelos de layouts pré criados ou um design
          exclusivo
        </Paragrafo>
        <BoxItem>
          <img
            src="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/M%C3%B3dulo%2020%20-%20Construindo%20e-mails%20com%20HTML/Aulas/images/icons/marca-de-verificacao2.png"
            alt="Item disponível"
            width={20}
            height={20}
          />
          <Paragrafo margin="0" tipo="principal" paddingBottom="12px">
            Site ultra rápido e responsivo
          </Paragrafo>
        </BoxItem>
        <BoxItem>
          <img
            src="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/M%C3%B3dulo%2020%20-%20Construindo%20e-mails%20com%20HTML/Aulas/images/icons/marca-de-verificacao2.png"
            alt="Item disponível"
            width={20}
            height={20}
          />
          <Paragrafo margin="0" tipo="principal" paddingBottom="10px">
            Ótima pontuação no google
          </Paragrafo>
        </BoxItem>
        <BoxItem>
          <img
            src="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/M%C3%B3dulo%2020%20-%20Construindo%20e-mails%20com%20HTML/Aulas/images/icons/marca-de-verificacao2.png"
            alt="Item disponível"
            width={20}
            height={20}
          />
          <Paragrafo margin="0" tipo="principal" paddingBottom="10px">
            Certificado SSL de segurança
          </Paragrafo>
        </BoxItem>
        <BoxItem>
          <img
            src="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/M%C3%B3dulo%2020%20-%20Construindo%20e-mails%20com%20HTML/Aulas/images/icons/marca-de-verificacao2.png"
            alt="Item disponível"
            width={20}
            height={20}
          />
          <Paragrafo margin="0" tipo="principal" paddingBottom="10px">
            Personalizável com a identidade da sua empresa
          </Paragrafo>
        </BoxItem>
        <BoxItem>
          <img
            src="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/M%C3%B3dulo%2020%20-%20Construindo%20e-mails%20com%20HTML/Aulas/images/icons/marca-de-verificacao2.png"
            alt="Item disponível"
            width={20}
            height={20}
          />
          <Paragrafo margin="0" tipo="principal" paddingBottom="10px">
            5 contas de E-mail Profissional
          </Paragrafo>
        </BoxItem>
        <BoxItem>
          <img
            src="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/M%C3%B3dulo%2020%20-%20Construindo%20e-mails%20com%20HTML/Aulas/images/icons/marca-de-verificacao2.png"
            alt="Item disponível"
            width={20}
            height={20}
          />
          <Paragrafo margin="0" tipo="principal" paddingBottom="10px">
            Suporte pelo WhatsApp
          </Paragrafo>
        </BoxItem>
        <BoxItem>
          <img
            src="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/M%C3%B3dulo%2020%20-%20Construindo%20e-mails%20com%20HTML/Aulas/images/icons/marca-de-verificacao2.png"
            alt="Item disponível"
            width={20}
            height={20}
          />
          <Paragrafo margin="0" tipo="principal" paddingBottom="10px">
            Prazo de entrega reduzido
          </Paragrafo>
        </BoxItem>
        <BoxItem>
          <img
            src="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/M%C3%B3dulo%2020%20-%20Construindo%20e-mails%20com%20HTML/Aulas/images/icons/marca-de-verificacao2.png"
            alt="Item disponível"
            width={20}
            height={20}
          />
          <Paragrafo margin="0" tipo="principal" paddingBottom="10px">
            1 ano de domínio gratis (Consultar condições)
          </Paragrafo>
        </BoxItem>
        <BoxItem>
          <img
            src="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/M%C3%B3dulo%2020%20-%20Construindo%20e-mails%20com%20HTML/Aulas/images/icons/marca-de-verificacao2.png"
            alt="Item disponível"
            width={20}
            height={20}
          />
          <Paragrafo margin="0" tipo="principal" paddingBottom="10px">
            1 ano de Hospedagem grátis
          </Paragrafo>
        </BoxItem>
      </BoxLista>
      <BotaoBody
        href="https://wa.me/5541984424733?text=Ol%C3%A1%2C+tudo+bem%3F%0AEstou+interessado+no+%2APlano+Profissional%2A+para+desenvolver+um+site+para+minha+empresa.+Seria+poss%C3%ADvel+fornecer+mais+informa%C3%A7%C3%B5es+sobre+os+detalhes+deste+plano+e+como+ele+pode+beneficiar+o+meu+neg%C3%B3cio%3F"
        target="_blank"
        width="100%"
        position="absolute"
        bottom={0}
        margin="10px 0 0 0"
      >
        Quero este!
      </BotaoBody>
    </BoxConteudoEstilo>
  )
}

export default BoxProfissional
