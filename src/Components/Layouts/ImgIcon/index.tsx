import { ImgIconEstilo } from './styles'

export type ImgIconProps = {
  src: string
  width: string
}

const ImgIcon = ({ src, width }: ImgIconProps) => (
  <ImgIconEstilo src={src} width={width} />
)

export default ImgIcon
