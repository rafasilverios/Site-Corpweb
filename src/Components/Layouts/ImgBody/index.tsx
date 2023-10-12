import { ImgBodyEstilo, Img } from './styles'

export type ImgProps = {
  src?: string
  maxWidth: string
}

const ImgBody = ({ src, maxWidth }: ImgProps) => {
  return (
    <ImgBodyEstilo maxWidth={maxWidth}>
      <Img src={src} />
    </ImgBodyEstilo>
  )
}

export default ImgBody
