import { ParagrafoEstilo } from './styles'

export type ParagrafoProps = {
  children: string
  tipo?: string
  fontSize?: number
  paddingTop?: string
  paddingBottom?: string
  margin?: string
}

const Paragrafo = ({
  children,
  tipo,
  fontSize,
  paddingTop,
  paddingBottom,
  margin
}: ParagrafoProps) => (
  <ParagrafoEstilo
    fontSize={fontSize}
    tipo={tipo}
    paddingTop={paddingTop}
    paddingBottom={paddingBottom}
    margin={margin}
  >
    {children}
  </ParagrafoEstilo>
)

export default Paragrafo
