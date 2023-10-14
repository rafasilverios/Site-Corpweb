import styled from 'styled-components'
import { ParagrafoProps } from '.'

export const ParagrafoEstilo = styled.p<ParagrafoProps>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '18px')};
  color: ${(props) =>
    props.tipo === 'principal'
      ? props.theme.corFonteClara
      : props.theme.corDeFundo};
  padding-top: ${(props) => props.paddingTop};
  padding-bottom: ${(props) => props.paddingBottom};
  font-weight: 300;
  max-width: 675px;
  margin: ${(props) => props.margin};
  font-weight: ${(props) => props.fontWeight};

  @media (max-width: 1300px) {
    font-size: 18px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
    margin: 0;
  }
`
