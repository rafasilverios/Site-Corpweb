import { ImgSobreEstilo, Img } from './styles'

export type ImgProps = {
  src?: string
  maxWidth: string
}

const ImgSobre = ({ src, maxWidth }: ImgProps) => {
  return (
    <ImgSobreEstilo maxWidth={maxWidth}>
      <Img src={src} />
    </ImgSobreEstilo>
  )
}

export default ImgSobre
