import { ParagrafoEstilo } from './styles'

export type ParagrafoProps = {
  children: string
  tipo?: string
  fontSize?: number
  paddingTop?: string
  paddingBottom?: string
  margin?: string
  fontWeight?: string
}

const Paragrafo = ({
  children,
  tipo,
  fontSize,
  paddingTop,
  paddingBottom,
  margin,
  fontWeight
}: ParagrafoProps) => (
  <ParagrafoEstilo
    fontSize={fontSize}
    tipo={tipo}
    paddingTop={paddingTop}
    paddingBottom={paddingBottom}
    margin={margin}
    fontWeight={fontWeight}
  >
    {children}
  </ParagrafoEstilo>
)

export default Paragrafo
