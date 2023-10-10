import { ImgBodyEstilo } from './styles'

type ImgProps = {
  scr: string
  width?: string
}

const ImgBody = ({ scr, width }: ImgProps) => {
  return <ImgBodyEstilo src={scr} width={width} />
}

export default ImgBody
