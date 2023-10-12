import { ImgStackEstilo } from './style'

export type ImgStackProps = {
  src: string
  padding?: string
}

const ImgStack = ({ src, padding }: ImgStackProps) => (
  <ImgStackEstilo src={src} padding={padding} />
)

export default ImgStack
