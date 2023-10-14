import { TituloH2Estilo } from './styles'

export type TituloH2Props = {
  children: string
  tipo?: string
  fontSize?: number
  maxWidth?: number
  paddingBottom?: string
  fontWeight?: number
  margin?: string
  backgroundColor?: string
}

const TituloH2 = ({
  children,
  fontSize,
  tipo,
  maxWidth,
  paddingBottom,
  fontWeight,
  margin,
  backgroundColor
}: TituloH2Props) => (
  <TituloH2Estilo
    fontSize={fontSize}
    tipo={tipo}
    maxWidth={maxWidth}
    paddingBottom={paddingBottom}
    fontWeight={fontWeight}
    margin={margin}
    backgroundColor={backgroundColor}
  >
    {children}
  </TituloH2Estilo>
)

export default TituloH2
