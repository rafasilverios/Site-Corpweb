import { TituloH2Estilo } from './styles'

export type TituloH2Props = {
  children: string
  tipo?: string
  fontSize?: number
  maxWidth?: number
  paddingBottom?: string
  fontWeight?: number
  margin?: string
}

const TituloH2 = ({
  children,
  fontSize,
  tipo,
  maxWidth,
  paddingBottom,
  fontWeight,
  margin
}: TituloH2Props) => (
  <TituloH2Estilo
    fontSize={fontSize}
    tipo={tipo}
    maxWidth={maxWidth}
    paddingBottom={paddingBottom}
    fontWeight={fontWeight}
    margin={margin}
  >
    {children}
  </TituloH2Estilo>
)

export default TituloH2
