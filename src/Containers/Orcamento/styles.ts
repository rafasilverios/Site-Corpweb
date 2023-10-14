import styled from 'styled-components'

export const OrcamentoEstilo = styled.section`
  min-height: 100vh;
  background-color: ${(props) => props.theme.corDeFundo};
  padding: 130px 0;
`

export const DisplayGridOrcamento = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  justify-content: center;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`
