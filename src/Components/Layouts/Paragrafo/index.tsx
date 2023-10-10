import { ParagrafoEstilo } from './styles'

export type ParagrafoProps = {
  children: string
  tipo?: string
  fontSize?: number
  paddingTop?: string
}

const Paragrafo = ({
  children,
  tipo,
  fontSize,
  paddingTop
}: ParagrafoProps) => (
  <ParagrafoEstilo fontSize={fontSize} tipo={tipo} paddingTop={paddingTop}>
    {children}
  </ParagrafoEstilo>
)

export default Paragrafo
