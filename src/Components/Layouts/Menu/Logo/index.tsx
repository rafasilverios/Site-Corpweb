import { ImgLogo } from './styles'

type LogoProps = {
  src: string
  alt: string
  width: string
  height: string
}

const Logo = ({ src, alt, width, height }: LogoProps) => (
  <a href="#top">
    <ImgLogo src={src} alt={alt} width={width} height={height} />
  </a>
)

export default Logo
