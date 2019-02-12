import { createGlobalStyle } from 'styled-components';
import { normalize, rem } from 'polished';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,500');

  ${normalize()}

  h1, h2 ,h3 ,h4 {
    font-weight: 500;
  }

  html {
    box-sizing: border-box;
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  body {
    background: #FFF;
    color: #000;
    font-family: 'Roboto', sans-serif;
    font-style: normal;
    font-size: ${rem(16)};
    font-weight: 400;
    line-height: ${rem(22)};
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
`;

export default GlobalStyle;
