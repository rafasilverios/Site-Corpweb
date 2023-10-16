import styled from 'styled-components'

export const LinksMenuMobileEstilo = styled.nav`
  display: none;
  background-color: ${(props) => props.theme.corPrincipal};
  padding: 48px;
  font-size: 18px;
  position: absolute;
  top: 70px;
  right: 0;
  text-align: center;

  @media (max-width: 820px) {
    display: block;
  }

  & ul {
    list-style: none;
  }

  & li {
    padding: 16px;
  }

  & a {
    text-decoration: none;
    color: ${(props) => props.theme.corFonteClara};
  }
`
