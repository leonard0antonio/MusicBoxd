import { createGlobalStyle } from "styled-components";
import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      text: string;
      accent: string;
    };
  }
}

export const GlobalStyle = createGlobalStyle`
* { box-sizing: border-box; margin: 0; padding: 0 }
html, body, #root { height: 100%; }
body {
font-family: 'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
background: ${({ theme }) => theme.colors.background};
color: ${({ theme }) => theme.colors.text};
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
}
button { cursor: pointer; }
`;
