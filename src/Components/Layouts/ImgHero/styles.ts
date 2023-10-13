import styled from 'styled-components'
import { ImgProps } from '.'

export const ImgHeroEstilo = styled.div<ImgProps>`
  // width: 100%;
  // max-width: ${(props) => props.maxWidth};
  // position: relative;
  // overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Img = styled.img`
  width: 100%;
  height: auto;
  display: block;

  @media (max-width: 1660px) {
    width: 720px;
  }

  @media (max-width: 1520px) {
    width: 650px;
  }

  @media (max-width: 1450px) {
    width: 500px;
  }

  @media (max-width: 768px) {
    width: 450px;
  }

  @media (max-width: 480px) {
    width: 320px;
  }

  @media (max-width: 300px) {
    width: 250px;
  }
`
