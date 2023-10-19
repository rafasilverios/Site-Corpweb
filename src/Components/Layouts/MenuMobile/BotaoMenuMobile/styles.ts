import styled from 'styled-components'

export const MenuMobileEstilo = styled.img`
  max-height: 24px;
  display: none;
  cursor: pointer;
  position: absolute;
  top: 23px;
  right: 32px;

  @media (max-width: 820px) {
    display: block;
  }
`
