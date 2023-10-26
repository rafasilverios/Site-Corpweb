import { ImgLogo } from './styles'

type LogoProps = {
  src: string
  alt: string
}

const Logo = ({ src, alt }: LogoProps) => (
  <a href="#top">
    <ImgLogo src={src} alt={alt} />
  </a>
)

export default Logo
