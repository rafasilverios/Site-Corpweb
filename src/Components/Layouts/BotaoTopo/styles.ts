import styled from 'styled-components'

export const BotaoTopoEstilo = styled.a`
  position: fixed;
  bottom: 16px;
  right: 16px;
  content: '';
  background-image: url('https://raw.githubusercontent.com/rafasilverios/EBAC-Engenheiro-Front-end/main/Servidor%20de%20Imagens/CorpWeb/img/icons/seta-para-cima.png');
  background-position: bottom right;
  background-repeat: no-repeat;
  width: 64px;
  height: 64px;
  transition: all 300ms ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 820px) {
    display: none;
  }
`
