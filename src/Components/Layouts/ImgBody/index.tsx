import { ImgEstilo } from './styles'

type ImgProps = {
  scr: string
}

const ImgBody = ({ scr }: ImgProps) => {
  return <ImgEstilo src={scr} />
}

export default ImgBody
