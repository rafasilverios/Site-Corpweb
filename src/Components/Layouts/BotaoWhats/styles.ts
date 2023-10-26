import styled from 'styled-components'

export const BotaoWhatsEstilo = styled.a`
  position: fixed;
  z-index: 2;
  bottom: 0;
  left: 0;
  content: '';
  background-image: url('./assets/img/whatsapp-verde-64px.png');
  background-position: bottom left;
  background-repeat: no-repeat;
  width: 65px;
  height: 65px;
  transition: all 300ms ease;

  &:hover {
    transform: scale(1.1);
  }

  & p {
    position: absolute;
    width: 18px;
    height: 18px;
    top: 0;
    right: 0;
    text-align: center;
    font-size: 13px;
    background-color: red;
    color: #fff;
    font-weight: bold;
    border-radius: 50%;
    line-height: 16px;
  }
`
