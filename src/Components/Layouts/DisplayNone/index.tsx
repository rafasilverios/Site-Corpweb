import { DisplayNoneEstilo } from './styles'

type DisplayNoneProps = {
  children: React.ReactNode
}

const DisplayNone = ({ children }: DisplayNoneProps) => (
  <DisplayNoneEstilo> {children} </DisplayNoneEstilo>
)

export default DisplayNone
