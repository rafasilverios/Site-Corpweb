import { ImgHeroEstilo, Img } from './styles'

export type ImgProps = {
  src?: string
  maxWidth: string
}

const ImgHero = ({ src, maxWidth }: ImgProps) => {
  return (
    <ImgHeroEstilo maxWidth={maxWidth}>
      <Img src={src} />
    </ImgHeroEstilo>
  )
}

export default ImgHero
