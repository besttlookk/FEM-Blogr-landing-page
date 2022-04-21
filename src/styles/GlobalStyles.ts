import { createGlobalStyle } from "styled-components";
import media from "./media";

const GlobalStyle = createGlobalStyle`

  :root{
    --col-primary:hsl(356, 100%, 66%); // CTA Text 
    --col-primary-light:hsl(355, 100%, 74%); // CTA hover background
    --col-dark: hsl(208, 49%, 24%); //heading
    --col-light:hsl(0, 0%, 100%); // text
    --col-gray: hsl(240, 2%, 79%); // footer-text
    --col-darkgray: hsl(207, 13%, 34%); // body-copy
    --col-footer-bg:hsl(240, 10%, 16%);

    --grad-red: linear-gradient(45deg, hsl(13, 100%, 72%), hsl(353, 100%, 62%) 80%);
    --grad-red-sm : linear-gradient(150deg, hsl(13, 100%, 72%), hsl(353, 100%, 62%) 90%);


    --font-primary: 'Overpass', sans-serif;
    --font-secondary: 'Ubuntu', sans-serif;

    --height-header: 10rem;
  }

  *,*::before, *::after{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html{
    scroll-behavior: smooth;
    font-size: 62.5%;
  }

  ::-webkit-scrollbar{
    width: 1.8rem;
  }

  ::-webkit-scrollbar-track{
    background-color: var(--col-gray);
  }

  ::-webkit-scrollbar-thumb{
    background-color: var(--col-primary);
    border-radius: 10rem;
    
    &:hover{
    background-color: var(--col-primary-light);

    }
  }

  body{
    min-height: 100vh;
    font: 18px;
    font-family: var(--font-primary);
  }

  li{
    list-style: none;
  }

  a{
    text-decoration: none;
    font-family: var(--font-secondary);
  font-weight: 500;
  font-size: 1.8rem;
  }

  h1,h2,h3{
    font-family: var(--font-secondary);
    font-weight: 500;
    color: var(--col-dark);
  }

  h2{
    font-size: 2.8rem;

    ${media.laptop}{
      font-size: 3.4rem;
    }
  }

  h3{
    font-size: 2.8rem;

    ${media.tablet}{
      font-size: 2.2rem;
    }

    ${media.laptop}{
    font-size: 2.8rem;

    }
  }

  p{
    font-size: 1.6rem;
    color: var(--col-darkgray);
    line-height: 1.7;

    ${media.laptop}{
    font-size: 1.8rem;

    }
  }

`;

export default GlobalStyle;
