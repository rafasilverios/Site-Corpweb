import styled from 'styled-components'

export const FooterEstilo = styled.footer`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.theme.corSecundaria};
  text-align: center;
`

export const UlConfigFooter = styled.ul`
  list-style: none;
  display: flex;
  gap: 16px;

  @media (max-width: 470px) {
    display: none;
  }
`

export const LinkFooter = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.corFonteClara};
`

export const DisplayIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  padding-top: 42px;

  @media (max-width: 470px) {
    gap: 16px;
  }
`
