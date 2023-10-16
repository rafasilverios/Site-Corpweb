import { ReactNode } from 'react'
import { ContainerEstilo } from './styles'

export type ContainerProps = {
  children: ReactNode
  padding?: string
}

const Container = ({ children, padding }: ContainerProps) => (
  <ContainerEstilo padding={padding}>{children}</ContainerEstilo>
)

export default Container
