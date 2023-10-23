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

  @media (max-width: 370px) {
    padding: 0 16px;
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
    padding: 32px 32px 65px;
  }

  @media (max-width: 820px) {
    padding: 32px 16px 65px;
    margin-top: 32px;
  }
}
`

export const DisplayGrid = styled.div`
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
    props.backgroundColor ? props.backgroundColor : props.theme.corDeFundo};
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    width: 305px;
    height: 550px;
  }

  @media (max-width: 990px) {
    width: 100%;
    height: 350px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (max-width: 575px) {
    width: 100%;
    height: max-content;
  }

  @media (max-width: 300px) {
    width: 100%;
    height: max-content;
  }
`

export const DivRetanguloMenor = styled.div<SobreProps>`
  width: 100%;
  height: 100%;
  text-align: ${(props) => props.textAlign};
  margin-bottom: ${(props) => props.marginBottom};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : props.theme.corDeFundo};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`

export const TextoBusca = styled.p<SobreProps>`
  font-size: 20px;
  color: ${(props) => props.theme.corFonteClara};
  font-weight: 300;
  margin: 42px;

  @media (max-width: 1200px) {
    padding: 32px;
    margin: 0;
  }
`
