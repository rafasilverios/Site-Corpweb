import styled from 'styled-components'

export const VantagensEstilo = styled.section`
  min-height: 100vh;
  padding: 130px 0;
  background-color: ${(props) => props.theme.corSecundaria};
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
  padding: 0 16px;

  @media (max-width: 990px) {
    gap: 30px;
  }

  @media (max-width: 820px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 60px;
  }
`

export const DivMaxWidth = styled.div`
  max-width: 320px;
`
