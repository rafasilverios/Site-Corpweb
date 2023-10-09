import styled from 'styled-components'
import { ParagrafoProps } from '.'

export const ParagrafoEstilo = styled.p<ParagrafoProps>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '18px')};
  color: ${(props) => (props.color ? '#' + props.color : '#' + 'F9F5E7')};
  padding-top: ${(props) => props.paddingTop};
  font-weight: 300;
`
