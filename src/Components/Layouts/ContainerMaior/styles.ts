import styled from 'styled-components'

export const ContainerMaiorEstilo = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  padding: 130px 32px;

  @media (max-width: 820px) {
    flex-flow: column wrap;
    align-items: center;
    padding: 130px 0;
  }
`

export default ContainerMaiorEstilo
