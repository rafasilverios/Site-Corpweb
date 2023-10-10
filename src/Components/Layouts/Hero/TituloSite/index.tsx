import { TituloEstilo } from './styles'

export type TituloProps = {
  children: string
  tipo?: string
  fontSize?: number
  maxWidth?: number
  paddingBottom?: string
  fontWeight?: number
}

const TituloSite = ({
  children,
  fontSize,
  tipo,
  maxWidth,
  paddingBottom,
  fontWeight
}: TituloProps) => (
  <TituloEstilo
    fontSize={fontSize}
    tipo={tipo}
    maxWidth={maxWidth}
    paddingBottom={paddingBottom}
    fontWeight={fontWeight}
  >
    {children}
  </TituloEstilo>
)

export default TituloSite
