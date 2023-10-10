import { ParagrafoEstilo } from './styles'

export type ParagrafoProps = {
  children: string
  tipo?: string
  fontSize?: number
  paddingTop?: string
  paddingBottom?: string
}

const Paragrafo = ({
  children,
  tipo,
  fontSize,
  paddingTop,
  paddingBottom
}: ParagrafoProps) => (
  <ParagrafoEstilo
    fontSize={fontSize}
    tipo={tipo}
    paddingTop={paddingTop}
    paddingBottom={paddingBottom}
  >
    {children}
  </ParagrafoEstilo>
)

export default Paragrafo
