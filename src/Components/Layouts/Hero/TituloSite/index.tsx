import { TituloEstilo } from './styles'

export type TituloProps = {
  children: string
  tipo?: string
  fontSize?: number
  maxWidth?: number
  paddingBottom?: string
  fontWeight?: number
  margin?: string
}

const TituloSite = ({
  children,
  fontSize,
  tipo,
  maxWidth,
  paddingBottom,
  fontWeight,
  margin
}: TituloProps) => (
  <TituloEstilo
    fontSize={fontSize}
    tipo={tipo}
    maxWidth={maxWidth}
    paddingBottom={paddingBottom}
    fontWeight={fontWeight}
    margin={margin}
  >
    {children}
  </TituloEstilo>
)

export default TituloSite
