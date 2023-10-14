import styled from 'styled-components'

import { TituloH3Props } from '.'

export const TituloH3Estilo = styled.h3<TituloH3Props>`
  max-width: ${(props) => (props.maxWidth ? props.maxWidth + 'px' : '700px')};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '28px')};
  color: ${(props) =>
    props.tipo === 'principal'
      ? props.theme.corDeFundoBotao
      : props.theme.corFonteClara};
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
