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
        <Logo
          width="69.98px"
          height="65px"
          alt="Logo da CorpWeb site para empresas"
          src="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/Servidor%20de%20Imagens/CorpWeb/img/logos/site%20para%20empresas%20logo%20fundo%20claro.png"
        />
        <div>
          <UlConfigFooter>
            <li>
              <LinkFooter href="#inicio">
                <Paragrafo
                  margin="0"
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
                  margin="0"
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
                  margin="0"
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
                  margin="0"
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
                  margin="0"
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
          margin="0"
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
              alt="Logo do Whatsapp"
              width="36px"
              height="36px"
              src="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/Servidor%20de%20Imagens/CorpWeb/img/icons/whatsapp-cheio.png"
            />
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/rafaelsilverio-eng-software/"
            rel="noreferrer"
          >
            <ImgIcon
              alt="Logo do LinkedIn"
              width="36px"
              height="36px"
              src="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/Servidor%20de%20Imagens/CorpWeb/img/icons/linkedin-cheio.png"
            />
          </a>
          <a
            target="_blank"
            href="mailto:contato@corpweb.com.br"
            rel="noreferrer"
          >
            <ImgIcon
              alt="Logo e-mail"
              width="36px"
              height="36px"
              src="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/Servidor%20de%20Imagens/CorpWeb/img/icons/email-cheio.png"
            />
          </a>
          <a
            target="_blank"
            href="https://www.instagram.com/corpwebsite"
            rel="noreferrer"
          >
            <ImgIcon
              alt="Logo do Instagram"
              width="36px"
              height="36px"
              src="https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/Servidor%20de%20Imagens/CorpWeb/img/icons/instagram-cheio.png"
            />
          </a>
        </DisplayIcons>
      </Container>
    </FooterEstilo>
  )
}

export default Footer
