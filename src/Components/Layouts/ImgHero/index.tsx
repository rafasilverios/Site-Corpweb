import { ImgHeroEstilo } from './styles'

type ImgProps = {
  src: string
  width?: string
  alt: string
}

const ImgHero = ({ src, width, alt }: ImgProps) => {
  return <ImgHeroEstilo src={src} width={width} alt={alt} />
}

export default ImgHero
