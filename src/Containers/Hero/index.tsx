import ImgBody from '../../Components/Layouts/ImgBody'
import { HeroEstilo } from './styles'

type HeroProps = {
  id: string
}

const Hero = ({ id }: HeroProps) => {
  return (
    <HeroEstilo id={id}>
      <ImgBody
        width="960px"
        scr="https://raw.githubusercontent.com/rafasilverios/Site-Corpweb/main/src/img/print-lux.PNG?token=GHSAT0AAAAAACC3ZCEN25WS2HCRQ2B2DZ6WZJEJMEQ"
      />
    </HeroEstilo>
  )
}

export default Hero
