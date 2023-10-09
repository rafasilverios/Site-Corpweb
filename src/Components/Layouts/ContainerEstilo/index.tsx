import { ReactNode } from 'react'
import { ContainerEstilo } from './styles'

export type ContainerProps = {
  children: ReactNode
}

const Container = (props: ContainerProps) => (
  <ContainerEstilo>{props.children}</ContainerEstilo>
)

export default Container
