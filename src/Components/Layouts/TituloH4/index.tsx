import { TituloH4Estilo } from './styles'

export type TituloH4Props = {
  children: string
  tipo?: string
  fontSize?: number
  maxWidth?: number
  padding?: string
  fontWeight?: number
  margin?: string
  backgroundColor?: string
}

const TituloH4 = ({
  children,
  fontSize,
  tipo,
  maxWidth,
  padding: paddingBottom,
  fontWeight,
  margin,
  backgroundColor
}: TituloH4Props) => (
  <TituloH4Estilo
    fontSize={fontSize}
    tipo={tipo}
    maxWidth={maxWidth}
    padding={paddingBottom}
    fontWeight={fontWeight}
    margin={margin}
    backgroundColor={backgroundColor}
  >
    {children}
  </TituloH4Estilo>
)

export default TituloH4
