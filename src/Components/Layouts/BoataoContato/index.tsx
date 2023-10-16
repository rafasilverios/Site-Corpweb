import { BotaoContatoEstilo } from './styles'

type BotaoContatoProps = {
  children?: React.ReactNode
  href: string
  target: string
}

const BotaoContato = ({ children, href, target }: BotaoContatoProps) => (
  <BotaoContatoEstilo href={href} target={target}>
    {children}
  </BotaoContatoEstilo>
)

export default BotaoContato
