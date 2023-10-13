import { TituloH3Estilo } from './styles'

export type TituloH3Props = {
  children: string
  tipo?: string
  fontSize?: number
  maxWidth?: number
  paddingBottom?: string
  fontWeight?: number
  margin?: string
}

const TituloH3 = ({
  children,
  fontSize,
  tipo,
  maxWidth,
  paddingBottom,
  fontWeight,
  margin
}: TituloH3Props) => (
  <TituloH3Estilo
    fontSize={fontSize}
    tipo={tipo}
    maxWidth={maxWidth}
    paddingBottom={paddingBottom}
    fontWeight={fontWeight}
    margin={margin}
  >
    {children}
  </TituloH3Estilo>
)

export default TituloH3
