import styled from 'styled-components'

export const BotaoTopoEstilo = styled.a`
  position: fixed;
  bottom: 0;
  right: 0;
  content: '';
  background-image: url('./assets/img/back-to-top.png');
  background-position: bottom right;
  background-repeat: no-repeat;
  width: 64px;
  height: 64px;
  transition: all 300ms ease;

  & hover: {
    transform: scale(1.1);
  }
`
