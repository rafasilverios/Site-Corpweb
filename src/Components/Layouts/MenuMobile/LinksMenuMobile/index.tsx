import { LinksMenuMobileEstilo } from './styles'

const LinksMenuMobile = () => (
  <LinksMenuMobileEstilo className="collapse" id="menuMobile">
    <ul>
      <li>
        <a href="#top" aria-label="Início">
          Início
        </a>
      </li>
      <li>
        <a href="#sobre" aria-label="Sobre">
          Sobre
        </a>
      </li>
      <li>
        <a href="#vantagens" aria-label="Vantagens">
          Vantagens
        </a>
      </li>
      <li>
        <a href="#orcamento" aria-label="Orçamento">
          Orçamento
        </a>
      </li>
      <li>
        <a href="#contato" aria-label="Contato">
          Contato
        </a>
      </li>
    </ul>
  </LinksMenuMobileEstilo>
)

export default LinksMenuMobile
