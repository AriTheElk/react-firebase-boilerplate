import { injectGlobal } from 'styled-components';

export default injectGlobal`
  html, body, #root, .container-loading {
    font-family :sans-serif;
    height: 100%;
    margin: 0;
  }

  #app {
    color: #4d4d4d;
    font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
    margin: 0 auto;
    max-width: 850px;
    min-width: 550px;
  }

  a:link, a:hover, a:visited {
    color: dodgerblue;
  }

  a.active {
    color: orange;
  }

  nav {
    padding-top: 20px;
  }

  .container-loading {
    display: table;
    table-layout: fixed;
    width: 100%;
  }

  .loading {
    height: 100px;
    margin: 0 auto;
    width: 100px;
  }

  .loading-row {
    background-color: #fff;
    display:table-cell;
    height: 100%;
    min-height: 100%;
    text-align:center;
    vertical-align:middle;
    width: 100%;
  }

  .loading div {
    width: inherit !important;
  }

  .loading svg {
    display: block;
    margin: 0 auto;
    width: 100px;
  }

  .h1-loading {
    color: #fff;
    font-size: 6rem;
    line-height: 8rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 300;
  }

  h1 {
    font-size: 28px;
  }
`;
