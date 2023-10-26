import { ImgLinesEstilo } from './styles'

export type ImgLinesProps = {
  src: string
  tipo: 'esquerdoBaixo' | 'direitoCima'
  alt: string
}

const ImgLines = ({ src, tipo, alt }: ImgLinesProps) => (
  <ImgLinesEstilo src={src} tipo={tipo} alt={alt} />
)

export default ImgLines
