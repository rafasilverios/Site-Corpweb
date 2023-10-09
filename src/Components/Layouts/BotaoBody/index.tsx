import { BotaoEstilo } from './styles'

type BotaoProps = {
  children: string
  href: string
}

const BotaoBody = ({ children, href }: BotaoProps) => (
  <BotaoEstilo href={href}>{children}</BotaoEstilo>
)

export default BotaoBody
