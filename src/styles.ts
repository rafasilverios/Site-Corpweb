import { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
  }

  .container {
    max-width: 1200px;
    display: flex;
  }
`
export default EstiloGlobal
