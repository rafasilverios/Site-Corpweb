import styled from 'styled-components'

export const BoxConteudoEstilo = styled.div`
  background-color: ${(props) => props.theme.corPrincipal};
  position: relative;
`

export const BoxTitulo = styled.div`
  text-align: center;
`

export const BoxLista = styled.div`
  padding: 24px 24px 90px;
`

export const BoxItem = styled.div`
  display: flex;
  gap: 8px;
`
