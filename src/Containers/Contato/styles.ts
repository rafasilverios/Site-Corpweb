import styled from 'styled-components'
import { ContatoProps } from '.'

export const ContatoEstilo = styled.section`
  min-heigth: max-content;
  background-color: ${(props) => props.theme.corDeFundoBotao};
`

export const ConfigDisplayTexto = styled.div<ContatoProps>`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  gap: ${(props) => props.gap};

  @media (max-width: 820px) {
    padding: 0 16px;
  }
`

export const DisplayBotaoContato = styled.div<ContatoProps>`
  display: grid;
  // grid-template-columns: repeat(2, max-content);
  grid-template-columns: 1fr;
  align-items: start;
  margin-bottom: ${(props) => props.marginBottom};
  // gap: 8px;

  // @media (max-width: 470px) {
  //   grid-template-columns: 1fr;
  // }
`
