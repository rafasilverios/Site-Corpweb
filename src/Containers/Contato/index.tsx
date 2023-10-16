import BotaoContato from '../../Components/Layouts/BoataoContato'
import ContainerMaior from '../../Components/Layouts/ContainerMaior'
import ImgIcon from '../../Components/Layouts/ImgIcon'
import Paragrafo from '../../Components/Layouts/Paragrafo'
import TituloH4 from '../../Components/Layouts/TituloH4'
import {
  ConfigDisplayTexto,
  ContatoEstilo,
  DisplayBotaoContato
} from './styles'

export type ContatoProps = {
  id?: string
  marginBottom?: string
}

const Contato = ({ id }: ContatoProps) => {
  return (
    <ContatoEstilo id={id}>
      <ContainerMaior>
        <ConfigDisplayTexto>
          <TituloH4
            tipo="principal"
            fontSize={48}
            fontWeight={500}
            padding="0 0 16px 0"
          >
            Ficou com alguma dúvida?
          </TituloH4>
          <Paragrafo>
            Entre em contato conosco em um dos canais a seguir.
          </Paragrafo>
          <Paragrafo>
            Será uma enorme satisfação poder atender você e sua empresa!
          </Paragrafo>
        </ConfigDisplayTexto>
        <ConfigDisplayTexto>
          <DisplayBotaoContato>
            <BotaoContato
              href="https://wa.me/5541984424733?text=Ol%C3%A1%2C+tudo+bem%3F%0AEstou+interessado+em+desenvolver+um+site+para+minha+empresa.+Seria+poss%C3%ADvel+fornecer+mais+informa%C3%A7%C3%B5es+sobre+os+detalhes+deste+plano+e+como+ele+pode+beneficiar+o+meu+neg%C3%B3cio%3F"
              target="_blank"
            >
              <ImgIcon
                width="24px"
                src="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/M%C3%B3dulo%2020%20-%20Construindo%20e-mails%20com%20HTML/Aulas/images/icons/whatsapp-cheio.png"
              />
              <Paragrafo tipo="principal" fontWeight="500">
                (41) 9 8442-4733
              </Paragrafo>
            </BotaoContato>
            <BotaoContato
              href="https://www.linkedin.com/in/rafaelsilverio-eng-software/"
              target="_blank"
            >
              <ImgIcon
                width="24px"
                src="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/M%C3%B3dulo%2020%20-%20Construindo%20e-mails%20com%20HTML/Aulas/images/icons/linkedin-cheio.png"
              />
              <Paragrafo tipo="principal" fontWeight="500">
                linkedin.com/corpweb
              </Paragrafo>
            </BotaoContato>
          </DisplayBotaoContato>
          <DisplayBotaoContato>
            <BotaoContato
              href="mailto:contato@corpwebsite.com.br"
              target="_blank"
            >
              <ImgIcon
                width="24px"
                src="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/M%C3%B3dulo%2020%20-%20Construindo%20e-mails%20com%20HTML/Aulas/images/icons/email-cheio.png"
              />
              <Paragrafo tipo="principal" fontWeight="500">
                contato@corpwebsite.com.br
              </Paragrafo>
            </BotaoContato>
            <BotaoContato
              href="https://www.instagram.com/corpwebsite"
              target="_blank"
            >
              <ImgIcon
                width="24px"
                src="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/M%C3%B3dulo%2020%20-%20Construindo%20e-mails%20com%20HTML/Aulas/images/icons/instagram-cheio.png"
              />
              <Paragrafo tipo="principal" fontWeight="500">
                @corpweb
              </Paragrafo>
            </BotaoContato>
          </DisplayBotaoContato>
        </ConfigDisplayTexto>
      </ContainerMaior>
    </ContatoEstilo>
  )
}

export default Contato
