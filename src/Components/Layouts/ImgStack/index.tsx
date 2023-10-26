import { ImgStackEstilo } from './style'

export type ImgStackProps = {
  src: string
  padding?: string
  alt: string
}

const ImgStack = ({ src, padding, alt }: ImgStackProps) => (
  <ImgStackEstilo src={src} padding={padding} alt={alt} />
)

export default ImgStack
