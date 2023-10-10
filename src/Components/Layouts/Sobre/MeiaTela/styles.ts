import styled from 'styled-components'
import { MeiaTelaProps } from '.'

export const MeiaTelaEstilo = styled.div<MeiaTelaProps>`
  max-width: 50%;
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.theme.corDeFundo};
`
