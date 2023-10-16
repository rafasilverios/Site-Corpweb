import Container from '../../Components/Layouts/ContainerEstilo'
import ImgIcon from '../../Components/Layouts/ImgIcon'
import Logo from '../../Components/Layouts/Menu/Logo'
import Paragrafo from '../../Components/Layouts/Paragrafo'
import {
  DisplayIcons,
  FooterEstilo,
  LinkFooter,
  UlConfigFooter
} from './styles'

export type FooterProps = {
  id?: string
}

const Footer = ({ id }: FooterProps) => {
  return (
    <FooterEstilo id={id}>
      <Container padding="70px 32px">
        <Logo src="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/M%C3%B3dulo%2020%20-%20Construindo%20e-mails%20com%20HTML/Aulas/images/corpweb-logo-fundo-claro.png" />
        <div>
          <UlConfigFooter>
            <li>
              <LinkFooter href="#inicio">
                <Paragrafo
                  tipo="principal"
                  fontSize={16}
                  fontWeight="300"
                  paddingTop="32px"
                >
                  Início
                </Paragrafo>
              </LinkFooter>
            </li>
            <li>
              <LinkFooter href="#sobre">
                <Paragrafo
                  tipo="principal"
                  fontSize={16}
                  fontWeight="300"
                  paddingTop="32px"
                >
                  Sobre
                </Paragrafo>
              </LinkFooter>
            </li>
            <li>
              <LinkFooter href="#vantagens">
                <Paragrafo
                  tipo="principal"
                  fontSize={16}
                  fontWeight="300"
                  paddingTop="32px"
                >
                  Vantagens
                </Paragrafo>
              </LinkFooter>
            </li>
            <li>
              <LinkFooter href="#orcamento">
                <Paragrafo
                  tipo="principal"
                  fontSize={16}
                  fontWeight="300"
                  paddingTop="32px"
                >
                  Orçamento
                </Paragrafo>
              </LinkFooter>
            </li>
            <li>
              <LinkFooter href="#contato">
                <Paragrafo
                  tipo="principal"
                  fontSize={16}
                  fontWeight="300"
                  paddingTop="32px"
                >
                  Contato
                </Paragrafo>
              </LinkFooter>
            </li>
          </UlConfigFooter>
        </div>
        <Paragrafo
          tipo="principal"
          fontSize={16}
          fontWeight="300"
          paddingTop="16px"
        >
          © 2023{' '}
          <LinkFooter href="www.corpwebsite.com.br">CorpWeb | </LinkFooter>
          Site para Empresa
        </Paragrafo>
        <DisplayIcons>
          <a
            target="_blank"
            href="https://wa.me/5541984424733?text=Ol%C3%A1%2C+tudo+bem%3F%0AEstou+interessado+em+desenvolver+um+site+para+minha+empresa.+Seria+poss%C3%ADvel+fornecer+mais+informa%C3%A7%C3%B5es+sobre+os+detalhes+deste+plano+e+como+ele+pode+beneficiar+o+meu+neg%C3%B3cio%3F"
            rel="noreferrer"
          >
            <ImgIcon
              width="36px"
              src="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/M%C3%B3dulo%2020%20-%20Construindo%20e-mails%20com%20HTML/Aulas/images/icons/whatsapp-cheio.png"
            />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/rafaelsilverio-eng-software/"
            rel="noreferrer"
          >
            <ImgIcon
              width="36px"
              src="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/M%C3%B3dulo%2020%20-%20Construindo%20e-mails%20com%20HTML/Aulas/images/icons/linkedin-cheio.png"
            />
          </a>
          <a
            target="_blank"
            href="mailto:contato@corpweb.com.br"
            rel="noreferrer"
          >
            <ImgIcon
              width="36px"
              src="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/M%C3%B3dulo%2020%20-%20Construindo%20e-mails%20com%20HTML/Aulas/images/icons/email-cheio.png"
            />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/corpwebsite"
            rel="noreferrer"
          >
            <ImgIcon
              width="36px"
              src="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/M%C3%B3dulo%2020%20-%20Construindo%20e-mails%20com%20HTML/Aulas/images/icons/instagram-cheio.png"
            />
          </a>
        </DisplayIcons>
      </Container>
    </FooterEstilo>
  )
}

export default Footer