import styled from 'styled-components'
import { SobreProps } from '.'

export const SobreEstilo = styled.section<SobreProps>`
  position: relative;
  background: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : 'linear-gradient(to right, #1d1f21 50%, #ffa928 50%)'};
  display: ${(props) => props.display};
  align-items: center;
  justify-content: ${(props) => props.justifyContent};

  @media (max-width: 1300px) {
    gap: 80px;
  }

  @media (max-width: 970px) {
    gap: 40px;
  }

  @media (max-width: 820px) {
    background: ${(props) =>
      props.backgroundColor
        ? props.backgroundColor
        : 'linear-gradient(to bottom, #1d1f21 50%, #ffa928 50%)'};
    flex-flow: column wrap;
    align-items: center; /* Alinha o conteúdo verticalmente */
  }
}
`

export const ConfigDisplayTexto = styled.div`
  max-width: max-content;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;

  @media (max-width: 820px) {
    padding: 0 30px;
  }
`

export const DisplayFlexCenter = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  padding: 32px 0 130px;

  & > div {
    width: 33.33%;
    box-sizing: border-box;
    padding: 0 15px;
  }

  @media (max-width: 1280px) {
    justify-content: center;
    gap: 20px;
  }

  @media (max-width: 820px) {
    padding: 32px 0 65px;
    margin-top: 32px;
  }
}
`

export const DisplayGrid = styled.div<SobreProps>`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding: 130px 0;

  @media (max-width: 990px) {
    flex-direction: column;
  }

  @media (max-width: 768px) {
    padding: 65px 0;
  }
`

export const DivRetangulos = styled.div<SobreProps>`
  display: flex;
  flex-direction: column;
  width: 370px;
  height: 460px;
  text-align: ${(props) => props.textAlign};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : props.theme.corFonteClara};
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    width: 305px;
    height: 550px;
  }

  @media (max-width: 990px) {
    width: 720px;
    height: 350px;
  }

  @media (max-width: 768px) {
    width: 540px;
  }

  @media (max-width: 575px) {
    width: 340px;
    height: 460px;
  }

  @media (max-width: 300px) {
    width: 250px;
    height: max-content;
  }
`

export const DivRetanguloMenor = styled.div<SobreProps>`
  width: 100%;
  height: 100%;
  text-align: ${(props) => props.textAlign};
  margin-bottom: ${(props) => props.marginBottom};
  background-color: ${(props) => props.theme.corFonteClara};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

export const TextoBusca = styled.p<SobreProps>`
  font-size: 20px;
  color: ${(props) => props.theme.corDeFundo};
  font-weight: 300;
  margin: 42px;

  @media (max-width: 1200px) {
    margin: 32px;
  }
`
