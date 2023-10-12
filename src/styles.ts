import { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  .container {
    max-width: 1200px;
    display: flex;
  }
`
export default EstiloGlobal
