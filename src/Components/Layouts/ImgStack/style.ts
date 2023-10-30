import styled from 'styled-components'
import { ImgStackProps } from '.'

export const ImgStackEstilo = styled.img<ImgStackProps>`
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.theme.corFonteClara};

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    margin-top: 0;
  }
`
