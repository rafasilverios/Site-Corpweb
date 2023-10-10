import styled from 'styled-components'

export const SobreEstilo = styled.section`
  min-height: 630px;
  padding: 130px 4.5vw;
  background-color: #fff;
  display: flex;
  align-items: center;
  gap: 160px;

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
