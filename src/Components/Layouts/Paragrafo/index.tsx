import { ParagrafoEstilo } from './styles'

export type ParagrafoProps = {
  children: string
  color?: string
  fontSize?: number
  paddingTop?: string
}

const Paragrafo = ({
  children,
  color,
  fontSize,
  paddingTop
}: ParagrafoProps) => (
  <ParagrafoEstilo fontSize={fontSize} color={color} paddingTop={paddingTop}>
    {children}
  </ParagrafoEstilo>
)

export default Paragrafo
