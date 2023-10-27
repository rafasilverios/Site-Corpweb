import { ImgStackEstilo } from './style'

export type ImgStackProps = {
  src: string
  padding?: string
  alt: string
  width?: string
  heigth?: string
}

const ImgStack = ({ src, padding, alt }: ImgStackProps) => (
  <ImgStackEstilo
    src={src}
    padding={padding}
    alt={alt}
    width="132px"
    height="132px"
  />
)

export default ImgStack
