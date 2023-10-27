import styled from 'styled-components'
import { ImgLinesProps } from '.'

export const ImgLinesEstilo = styled.img<ImgLinesProps>`
  position: absolute;
  top: ${(props) => (props.tipo === 'direitoCima' ? 0 : 'none')};
  right: ${(props) => (props.tipo === 'direitoCima' ? 0 : 'none')};
  bottom: ${(props) => (props.tipo === 'esquerdoBaixo' ? 0 : 'none')};
  left: ${(props) => (props.tipo === 'esquerdoBaixo' ? 0 : 'none')};

  @media (max-width: 1180px) {
    display: none;
  }
`
