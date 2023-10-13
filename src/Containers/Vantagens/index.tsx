import { DisplayGridVantagens, VantagensEstilo } from './styles'

type VantagensProps = {
  id?: string
}

const Vantagens = ({ id }: VantagensProps) => (
  <VantagensEstilo id={id}>
    <DisplayGridVantagens>
      <div>Teste</div>
      <div>Teste</div>
      <div>Teste</div>
      <div>Teste</div>
      <div>Teste</div>
      <div>Teste</div>
    </DisplayGridVantagens>
  </VantagensEstilo>
)

export default Vantagens
