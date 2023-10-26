import { ImgSobreEstilo, Img } from './styles'

export type ImgProps = {
  src?: string
  maxWidth: string
  alt?: string
}

const ImgSobre = ({ src, maxWidth, alt }: ImgProps) => {
  return (
    <ImgSobreEstilo maxWidth={maxWidth}>
      <Img src={src} alt={alt} />
    </ImgSobreEstilo>
  )
}

export default ImgSobre
