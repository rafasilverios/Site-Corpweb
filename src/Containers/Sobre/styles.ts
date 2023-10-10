import styled from 'styled-components'
import { SobreProps } from '.'

export const SobreEstilo = styled.section<SobreProps>`
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : '#fff'};
  display: flex;
  align-items: center;

  @media (max-width: 1300px) {
    gap: 80px;
  }

  @media (max-width: 970px) {
    gap: 40px;
  }

  @media (max-width: 820px) {
    flex-flow: column wrap;
    padding: 30vw 0 10vw 0;
  }
`
export const ConfigDisplayTexto = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;

  @media (max-width: 820px) {
    padding: 0 30px;
`
