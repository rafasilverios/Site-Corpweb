import { ImgIconEstilo } from './styles'

type ImgIconProps = {
  src: string
}

const ImgIcon = ({ src }: ImgIconProps) => <ImgIconEstilo src={src} />

export default ImgIcon
