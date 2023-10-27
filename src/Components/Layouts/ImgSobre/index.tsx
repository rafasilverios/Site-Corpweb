import { ImgSobreEstilo, Img } from './styles'

export type ImgProps = {
  src?: string
  maxWidth: string
  height?: string
  alt?: string
}

const ImgSobre = ({ src, maxWidth, alt }: ImgProps) => {
  return (
    <ImgSobreEstilo maxWidth={maxWidth}>
      <Img src={src} alt={alt} width="675" height="450" />
    </ImgSobreEstilo>
  )
}

export default ImgSobre
