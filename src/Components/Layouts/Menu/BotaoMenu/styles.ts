import styled from 'styled-components'

type BotaoMenuProps = {
  isActive: boolean
}

export const BotaoMenuEstilo = styled.a<BotaoMenuProps>`
  height: 90px;
  padding: 0 24px;
  color: #f9f5e7;
  font-size: 18px;
  font-weight: 300;
  text-decoration: none;
  display: block;
  line-height: 90px;
  position: relative;
  transition: color 0.3s;

  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${({ isActive }) => (isActive ? '100%' : '0')};
    height: 5px;
    background-color: #ffa928;
    transition: width 0.3s ease-in-out;
  }

  background-color: ${({ isActive }) => (isActive ? '#3f4345' : '#2c2f30')};

  &:hover::before {
    width: 100%;
  }

  &:hover {
    background-color: #3f4345;
  }

  &.active {
    background-color: #3f4345;
    &::before {
      width: 100%; /* A linha na base permanece após o clique */
    }
  }
`
