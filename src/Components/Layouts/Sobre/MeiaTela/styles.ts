import styled from 'styled-components'
import { MeiaTelaProps } from '.'

export const MeiaTelaEstilo = styled.div<MeiaTelaProps>`
  width: 50%;
  max-width: 50%;
  display: flex;
  flex-flow: column wrap;
  padding: ${(props) => props.padding};

  @media (max-width: 820px) {
    width: 100%;
    max-width: 100%;
    height: 50%;
    max-height: 50%;
    padding: 65px 0;
`
