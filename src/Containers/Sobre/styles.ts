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
  padding-bottom: 130px;

  & > div {
    width: 33.33%;
    box-sizing: border-box;
    padding: 0 15px;
    margin-bottom: 20px;
  }

  @media (max-width: 1280px) {
    justify-content: center;
    margin-top: 100px;
    padding-bottom: 65px;
  }
}
`
