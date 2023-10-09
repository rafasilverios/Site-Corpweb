import { BotaoMenuEstilo } from './styles'

type BotaoMenuProps = {
  children: string
  href: string
  isActive: boolean
  onClick: () => void
}

const BotaoMenu = ({ children, href, isActive, onClick }: BotaoMenuProps) => {
  return (
    <BotaoMenuEstilo href={href} isActive={isActive} onClick={onClick}>
      {children}
    </BotaoMenuEstilo>
  )
}

export default BotaoMenu
