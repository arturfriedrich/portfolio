import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
    html, body {
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-size: 16px;
        margin: 0;
    }
`