import { ImgHeroEstilo } from './styles'

type ImgProps = {
  src: string
  width?: string
  height?: string
  alt: string
}

const ImgHero = ({ src, width, height, alt }: ImgProps) => {
  return <ImgHeroEstilo src={src} width={width} height={height} alt={alt} />
}

export default ImgHero
