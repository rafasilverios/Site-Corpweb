import BoxPremium from '../../Components/Layouts/BoxOrcamento/BoxPremium'
import BoxProfissional from '../../Components/Layouts/BoxOrcamento/BoxProfissional'
import Container from '../../Components/Layouts/ContainerEstilo'
import Paragrafo from '../../Components/Layouts/Paragrafo'
import TituloH2 from '../../Components/Layouts/TituloH2'
import { DisplayGridOrcamento, OrcamentoEstilo } from './styles'

type OrcamentoProps = {
  id?: string
}

const Orcamento = ({ id }: OrcamentoProps) => (
  <OrcamentoEstilo id={id}>
    <Container>
      <TituloH2
        tipo="principal"
        fontSize={48}
        fontWeight={500}
        paddingBottom="16px"
        maxWidth={720}
      >
        Solicite um Orçamento
      </TituloH2>
      <Paragrafo tipo="principal" paddingBottom="32px">
        Escolha a melhor opção para o site da sua empresa.
      </Paragrafo>
      <DisplayGridOrcamento>
        <BoxProfissional />
        <BoxPremium />
      </DisplayGridOrcamento>
    </Container>
  </OrcamentoEstilo>
)

export default Orcamento
