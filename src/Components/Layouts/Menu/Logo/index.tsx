import { ImgLogo } from './styles'

type LogoProps = {
  src: string
}

const Logo = ({ src }: LogoProps) => (
  <a href="#inicio">
    <ImgLogo src={src} />
  </a>
)

export default Logo
