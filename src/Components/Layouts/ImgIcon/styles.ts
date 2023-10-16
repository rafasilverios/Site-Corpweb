import styled from 'styled-components'

export const ImgIconEstilo = styled.img`
  width: ${(props) => props.width};

  @media (maxwidth: 600px) {
    margin-top: 16px;
  }
`
