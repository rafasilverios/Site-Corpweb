import styled from 'styled-components'

import { TituloH3Props } from '.'

export const TituloH3Estilo = styled.h3<TituloH3Props>`
  max-width: ${(props) => (props.maxWidth ? props.maxWidth + 'px' : '500px')};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '28px')};
  color: ${(props) =>
    props.tipo === 'principal'
      ? props.theme.corFonteClara
      : props.theme.corDeFundo};
  padding-bottom: ${(props) => props.paddingBottom};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 700)};
  margin: ${(props) => props.margin};

  @media (max-width: 300px) {
    font-size: 20px;
    padding: 16px;
  }
`
