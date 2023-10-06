import { BotaoMenuEstilo } from './style'

export type Props = {
  children: string
  href: string
}

const BotaoMenu = ({ children, href }: Props) => (
  <BotaoMenuEstilo href={href}>{children}</BotaoMenuEstilo>
)

export default BotaoMenu
