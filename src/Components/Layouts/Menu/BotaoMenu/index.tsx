import { BotaoMenuEstilo } from './styles'

type BotaoMenuProps = {
  children: string
  href: string
  isActive: boolean
  // onClick: () => void
}

const BotaoMenu = ({ children, href, isActive }: BotaoMenuProps) => {
  return (
    <BotaoMenuEstilo href={href} isActive={isActive}>
      {children}
    </BotaoMenuEstilo>
  )
}

export default BotaoMenu
