import styled from 'styled-components'

export const BotaoWhatsEstilo = styled.a`
  position: fixed;
  z-index: 2;
  bottom: 8px;
  left: 8px;
  content: '';
  background-image: url('https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/Servidor%20de%20Imagens/CorpWeb/img/icons/whatsapp-verde-64px.png');
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

  &.shake {
    animation: shake 0.5s ease infinite;
  }

  @keyframes shake {
    0%,
    100% {
      transform: translateX(0);
    }
    10%,
    30%,
    50%,
    70%,
    90% {
      transform: translateX(-3px);
    }
    20%,
    40%,
    60%,
    80% {
      transform: translateX(3px);
    }
  }

  @media (max-width: 820px) {
    left: auto;
    right: 16px;
  }
`
