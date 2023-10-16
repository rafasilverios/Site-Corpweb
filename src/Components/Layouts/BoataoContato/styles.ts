import styled from 'styled-components'

export const BotaoContatoEstilo = styled.a`
  display: flex;
  gap: 8px;
  align-items: center;
  background-color: ${(props) => props.theme.corSecundaria};
  border-radius: 8px;
  padding: 16px;
  cursor: pointer;
  text-decoration: none;
`
