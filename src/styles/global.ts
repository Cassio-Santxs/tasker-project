import { createGlobalStyle } from "styled-components";
 

export const GlobalStyle = createGlobalStyle`

:root {
  --primaryColor: #e0ffff;
  --secondaryColor: #fff2a6;
  --tertiaryColor: #ffccbd;
  --white: #ffffff;
  --black: #000000;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
    @media (max-width:1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

body {
  background: var(--white);
  -webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font-family: 'PT Serif', sans-serif;
    font-weight: 400;

  }

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;

  }

button {
    cursor: pointer;
  }

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }




`