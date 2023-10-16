import styled from 'styled-components'

import { TituloH4Props } from '.'

export const TituloH4Estilo = styled.h3<TituloH4Props>`
  max-width: ${(props) => (props.maxWidth ? props.maxWidth + 'px' : '700px')};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '28px')};
  color: ${(props) => props.theme.corDeFundo};
  padding: ${(props) => props.padding};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 700)};
  margin: ${(props) => props.margin};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : 'transparent'};

  @media (max-width: 1300px) {
    font-size: 28px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    margin: 0;
  }

  @media (max-width: 300px) {
    font-size: 20px;
    padding: 16px;
  }
`
