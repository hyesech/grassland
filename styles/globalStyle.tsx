import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
      box-sizing: border-box;
    }
  
    html {
      
      
    }
    
    body {
      width: 100vw;
      max-width: 100vw;
      height: 100vh;
      max-height: 100vh;
      overflow: hidden;
      background-color: #000000;
    }
`;

export default GlobalStyle;
