import styled from 'styled-components'
import { ImgStackProps } from '.'

export const ImgStackEstilo = styled.img<ImgStackProps>`
  padding: ${(props) => props.padding};
  background-color: ${(props) => props.theme.corFonteClara};
  width: 134px;
  height: auto;
  margin-top: 32px;
`
