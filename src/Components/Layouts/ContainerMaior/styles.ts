import styled from 'styled-components'

export const ContainerMaiorEstilo = styled.div`
  display: flex;
  justify-content: center;
  gap: 60px;
  padding: 130px 32px;

  @media (max-width: 820px) {
    display: block;
    padding: 130px 0;
  }

  @media (max-width: 768px) {
    padding: 65px 0;
  }
`

export default ContainerMaiorEstilo
