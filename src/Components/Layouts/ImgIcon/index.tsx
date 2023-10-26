import { ImgIconEstilo } from './styles'

export type ImgIconProps = {
  src: string
  width: string
  alt: string
}

const ImgIcon = ({ src, width, alt }: ImgIconProps) => (
  <ImgIconEstilo src={src} width={width} alt={alt} />
)

export default ImgIcon
