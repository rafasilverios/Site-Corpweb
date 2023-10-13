import styled from 'styled-components'

export const VantagensEstilo = styled.section`
  padding: 130px 0;
  background-color: ${(props) => props.theme.corDeFundo};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const DisplayGridVantagens = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`
