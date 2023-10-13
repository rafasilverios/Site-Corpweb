import { ImgHeroEstilo } from './styles'

type ImgProps = {
  src: string
  width?: string
}

const ImgHero = ({ src, width }: ImgProps) => {
  return <ImgHeroEstilo src={src} width={width} />
}

export default ImgHero
