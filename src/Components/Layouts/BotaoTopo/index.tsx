import { BotaoTopoEstilo } from './styles'

type BotaoTopoProps = {
  href: string
  ariaLabel: string
}

const BotaoTopo = ({ href, ariaLabel }: BotaoTopoProps) => (
  <BotaoTopoEstilo href={href} aria-label={ariaLabel} />
)

export default BotaoTopo
