import { ImgLinesEstilo } from './styles'

export type ImgLinesProps = {
  src: string
  tipo: 'esquerdoBaixo' | 'direitoCima'
}

const ImgLines = ({ src, tipo }: ImgLinesProps) => (
  <ImgLinesEstilo src={src} tipo={tipo} />
)

export default ImgLines
