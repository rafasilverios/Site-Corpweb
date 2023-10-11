import { ImgStackEstilo } from './style'

type ImgStackProps = {
  src: string
}

const ImgStack = ({ src }: ImgStackProps) => <ImgStackEstilo src={src} />

export default ImgStack
