import styled from 'styled-components'

import { TituloH2Props } from '.'

export const TituloH2Estilo = styled.h2<TituloH2Props>`
  max-width: ${(props) => (props.maxWidth ? props.maxWidth + 'px' : '500px')};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '28px')};
  color: ${(props) =>
    props.tipo === 'principal'
      ? props.theme.corFonteClara
      : props.theme.corDeFundo};
  padding-bottom: ${(props) => props.paddingBottom};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 700)};
  margin: ${(props) => props.margin};
  backgorund-color: ${(props) => props.backgroundColor};

  @media (max-width: 1300px) {
    font-size: 36px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
    margin: 0;
  }
`
