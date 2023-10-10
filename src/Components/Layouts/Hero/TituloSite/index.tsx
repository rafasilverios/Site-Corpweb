import { TituloEstilo } from './styles'

export type TituloProps = {
  children: string
  tipo?: string
  fontSize?: number
  maxWidth?: number
}

const TituloSite = ({ children, fontSize, tipo, maxWidth }: TituloProps) => (
  <TituloEstilo fontSize={fontSize} tipo={tipo} maxWidth={maxWidth}>
    {children}
  </TituloEstilo>
)

export default TituloSite
