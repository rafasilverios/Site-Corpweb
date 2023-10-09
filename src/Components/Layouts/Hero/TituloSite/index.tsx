import { TituloEstilo } from './styles'

type TituloProps = {
  children: string
}

const TituloSite = ({ children }: TituloProps) => (
  <TituloEstilo> {children} </TituloEstilo>
)

export default TituloSite
