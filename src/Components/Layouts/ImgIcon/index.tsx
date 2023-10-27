import { ImgIconEstilo } from './styles'

export type ImgIconProps = {
  src: string
  width: string
  height?: string
  alt: string
}

const ImgIcon = ({ src, width, height, alt }: ImgIconProps) => (
  <ImgIconEstilo src={src} width={width} height={height} alt={alt} />
)

export default ImgIcon
