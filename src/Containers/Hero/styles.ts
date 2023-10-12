import styled from 'styled-components'

export const HeroEstilo = styled.section`
  min-height: 100vh;
  padding: 4.25vw 0;
  background-color: ${(props) => props.theme.corDeFundo};
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

export const Quadrado = styled.div`
  height: 120px;
  width: 20px;
  background-color: #ffa928;
  margin-bottom: 48px;
`
