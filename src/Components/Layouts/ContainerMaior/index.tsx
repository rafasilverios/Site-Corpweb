import { ReactNode } from 'react'
import { ContainerMaiorEstilo } from './styles'

export type ContainerMaiorProps = {
  children: ReactNode
}

const ContainerMaior = (props: ContainerMaiorProps) => (
  <ContainerMaiorEstilo>{props.children}</ContainerMaiorEstilo>
)

export default ContainerMaior
