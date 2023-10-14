import { BotaoEstilo } from './styles'

export type BotaoProps = {
  children?: string
  href: string
  target?: string
  width?: string
  position?: string
  bottom?: number
  margin?: string
}

const BotaoBody = ({
  children,
  href,
  target,
  width,
  position,
  bottom,
  margin
}: BotaoProps) => (
  <BotaoEstilo
    href={href}
    target={target}
    width={width}
    position={position}
    bottom={bottom}
    margin={margin}
  >
    {children}
  </BotaoEstilo>
)

export default BotaoBody
