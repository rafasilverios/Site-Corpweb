import styled from 'styled-components'

export const Header = styled.header`
  background-color: #2c2f30;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 1;
  position: fixed;
`

export const MenuConfig = styled.div`
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  z-index: 3;
`

export const UlConfig = styled.ul`
  list-style: none;
  display: flex;
`
