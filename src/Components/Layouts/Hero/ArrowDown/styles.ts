import styled, { keyframes } from 'styled-components'

const moveArrowDown = keyframes`
  0% {
    bottom: 60px;
  }
  100% {
    bottom: 70px;
  }
`

export const Arrow = styled.div`
  border: solid white;
  border-width: 0 5px 5px 0;
  display: inline-block;
  padding: 3px;
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 100px;
  left: calc(50% - 25px);
  transform-origin: center;
  cursor: pointer;

  &.down {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }

  &.move-down {
    animation: ${moveArrowDown} 1s infinite alternate;
  }

  @media (max-height: 850px) {
    display: none;
  }

  @media (max-width: 1450px) {
    display: none;
  }
`
