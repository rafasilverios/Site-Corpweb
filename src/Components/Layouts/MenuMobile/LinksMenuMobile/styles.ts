import styled from 'styled-components'

export const LinksMenuMobileEstilo = styled.nav`
  background-color: ${(props) => props.theme.corPrincipal};
  padding: 16px 64px 48px;
  font-size: 18px;
  position: absolute;
  top: 100%;
  right: 0;
  text-align: center;

  @media (min-width: 820px) {
    display: none;
  }

  & ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  & li {
    padding: 16px;
  }

  & a {
    text-decoration: none;
    color: ${(props) => props.theme.corFonteClara};
  }
`
