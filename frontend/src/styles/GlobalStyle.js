import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --primary-light: #09C0FA;
        --primary-dark: #019DCE;
        --bg-light:#1E2633;
        --bg-dark:#171C26;
        --white:#FFFFFF;
        --gray:rgba(255,255,255,0.6);
        --success:#0A4700;
        --danger:#700001;

    }
    
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
    }

    html{

        scroll-behavior: smooth;

        @media (max-width: 1080px){
            font-size: 93.75%;
        }

        @media (max-width: 720px){
            font-size: 87.5%;
        }
    }

    body{
        background-color: var(--bg-dark);
        -webkit-font-smoothing: antialiased;
        color: var(--white);
    }

    body, input, textarea, button{
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong{
        font-weight: 600;
    }

    button{
        cursor: pointer;
    }

    [disabled] {
        opacity: 0.6;
        cursor: not-allowed;
    }

    a{
        text-decoration: none;
    }
`

