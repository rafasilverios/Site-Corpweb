import { ImgLinesEstilo } from './styles'

export type ImgLinesProps = {
  src: string
  tipo: 'esquerdoBaixo' | 'direitoCima'
  alt: string
  width?: string
  height?: string
}

const ImgLines = ({ src, tipo, alt }: ImgLinesProps) => (
  <ImgLinesEstilo
    src={src}
    tipo={tipo}
    alt={alt}
    width="150px"
    height="150px"
  />
)

export default ImgLines
