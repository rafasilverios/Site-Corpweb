import styled from 'styled-components'
import { ImgProps } from '.'

export const ImgSobreEstilo = styled.div<ImgProps>`
  width: 100%;
  max-width: ${(props) => props.maxWidth};
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Img = styled.img`
  display: block;

  @media (max-width: 1660px) {
    width: 720px;
    height: auto;
  }

  @media (max-width: 1520px) {
    width: 650px;
    height: auto;
  }

  @media (max-width: 1450px) {
    width: 500px;
    height: auto;
  }

  @media (max-width: 768px) {
    width: 450px;
    height: auto;
  }

  @media (max-width: 480px) {
    width: 320px;
    height: auto;
  }

  @media (max-width: 300px) {
    width: 250px;
    height: auto;
  }
`
