import styled from 'styled-components'

import { TituloProps } from '.'

export const TituloEstilo = styled.h1<TituloProps>`
  max-width: ${(props) => (props.maxWidth ? props.maxWidth + 'px' : '500px')};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '70px')};
  color: ${(props) =>
    props.tipo === 'principal'
      ? props.theme.corFonteClara
      : props.theme.corDeFundo};

  @media (max-width: 1300px) {
    font-size: 48px;
  }

  @media (max-width: 768px) {
    font-size: 32px;
  }
`
