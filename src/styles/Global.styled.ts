import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme.ts";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        margin: 0;
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.primaryBg};
        line-height: 1.2;
    }

    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
    
    a {
       text-decoration: none;
    }
    
    ul {
        list-style: none;
    }
    
    button {
        background-color: unset;
        border: none;
    }
    
    section {
        padding: 100px 0;
    }

    section:nth-of-type(3n+1) {
        background-color: ${theme.colors.primaryBg};
    }

    section:nth-of-type(3n+2) {
        background-color: ${theme.colors.secondaryBg};
    }

    section:nth-of-type(3n+3) {
        background-color: ${theme.colors.primaryBg};
        background-image: ${theme.colors.tertiaryBg};
    }
`