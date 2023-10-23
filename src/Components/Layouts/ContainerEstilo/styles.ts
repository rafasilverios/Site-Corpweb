import styled from 'styled-components'
import { ContainerProps } from '.'

export const ContainerEstilo = styled.div<ContainerProps>`
  max-width: 1200px;
  padding: 0 32px;
  margin: 0 auto;
  padding: ${(props) => props.padding};

  @media (max-width: 820px) {
    padding: 0 16px;
  }
`

export default ContainerEstilo
