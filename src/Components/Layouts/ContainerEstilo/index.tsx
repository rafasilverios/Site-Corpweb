import { ReactNode } from 'react'
import { ContainerEstilo } from './styles'

export type Props = {
  children: ReactNode
}

const Container = (props: Props) => (
  <ContainerEstilo>{props.children}</ContainerEstilo>
)

export default Container
