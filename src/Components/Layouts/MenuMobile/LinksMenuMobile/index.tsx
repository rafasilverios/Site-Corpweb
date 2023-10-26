import { LinksMenuMobileEstilo } from './styles'

const LinksMenuMobile = () => (
  <LinksMenuMobileEstilo className="collapse" id="menuMobile">
    <ul>
      <li>
        <a href="#top" aria-label="Início do site">
          Início
        </a>
      </li>
      <li>
        <a href="#sobre" aria-label="Sobre a CorpWeb site para empresa">
          Sobre
        </a>
      </li>
      <li>
        <a href="#vantagens" aria-label="Vantagens em nos contratar">
          Vantagens
        </a>
      </li>
      <li>
        <a
          href="#orcamento"
          aria-label="Orçamento para criar um site para sua empresa"
        >
          Orçamento
        </a>
      </li>
      <li>
        <a href="#contato" aria-label="Contato com a CorpWeb site para empresa">
          Contato
        </a>
      </li>
    </ul>
  </LinksMenuMobileEstilo>
)

export default LinksMenuMobile
