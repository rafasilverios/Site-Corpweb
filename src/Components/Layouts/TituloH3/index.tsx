import { TituloH3Estilo } from './styles'

export type TituloH3Props = {
  children: string
  tipo?: string
  fontSize?: number
  maxWidth?: number
  padding?: string
  fontWeight?: number
  margin?: string
  backgroundColor?: string
}

const TituloH3 = ({
  children,
  fontSize,
  tipo,
  maxWidth,
  padding: paddingBottom,
  fontWeight,
  margin,
  backgroundColor
}: TituloH3Props) => (
  <TituloH3Estilo
    fontSize={fontSize}
    tipo={tipo}
    maxWidth={maxWidth}
    padding={paddingBottom}
    fontWeight={fontWeight}
    margin={margin}
    backgroundColor={backgroundColor}
  >
    {children}
  </TituloH3Estilo>
)

export default TituloH3
