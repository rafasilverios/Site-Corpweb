import { DisplayFlexEstilo } from './styles'

type DisplayFlexProps = {
  children: React.ReactNode
}

const DisplayFlex = ({ children }: DisplayFlexProps) => (
  <DisplayFlexEstilo>{children}</DisplayFlexEstilo>
)

export default DisplayFlex
