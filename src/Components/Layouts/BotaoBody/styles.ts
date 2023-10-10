import styled from 'styled-components'

export const BotaoEstilo = styled.a`
  margin-top: 32px;
  padding: 20px 16px;
  font-size: 24px;
  background-color: ${(props) => props.theme.corDeFundoBotao};
  color: ${(props) => props.theme.corFonteClara};
  text-align: center;
  width: max-content;
  text-decoration: none;
  font-weight: bold;

  @media (max-width: 1300px) {
    font-size: 20px;
  }

  @media (max-width: 820px) {
    font-size: 16px;
  }
`
