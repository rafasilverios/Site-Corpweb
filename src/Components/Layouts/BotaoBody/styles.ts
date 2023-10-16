import styled from 'styled-components'
import { BotaoProps } from '.'

export const BotaoEstilo = styled.a<BotaoProps>`
  margin: ${(props) => (props.margin ? props.margin : '32px 0 0 0')};
  padding: 16px;
  font-size: 24px;
  background-color: ${(props) => props.theme.corDeFundoBotao};
  color: ${(props) => props.theme.corFonteClara};
  text-align: center;
  width: ${(props) => (props.width ? props.width : 'max-content')};
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  display: block;
  position: ${(props) => props.position};
  bottom: ${(props) => props.bottom};

  @media (max-width: 1300px) {
    font-size: 20px;
  }

  @media (max-width: 820px) {
    font-size: 16px;
  }
`
