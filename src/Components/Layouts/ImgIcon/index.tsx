import { ImgIconEstilo } from './styles'

export type ImgIconProps = {
  src: string
  width: string
  height?: string
  alt: string
}

const ImgIcon = ({ src, width, alt }: ImgIconProps) => (
  <ImgIconEstilo src={src} width={width} height="auto" alt={alt} />
)

export default ImgIcon
