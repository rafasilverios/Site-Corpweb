import { MeiaTelaEstilo } from './styles'

export type MeiaTelaProps = {
  children: React.ReactNode
  tipo?: string
  padding?: string
}

const MeiaTela = ({ children, tipo, padding }: MeiaTelaProps) => (
  <MeiaTelaEstilo tipo={tipo} padding={padding}>
    {children}
  </MeiaTelaEstilo>
)

export default MeiaTela
