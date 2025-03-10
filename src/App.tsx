import { ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { defaultTheme } from "./styles/themes/default.ts";

import { GlobalStyle } from "./styles/global.ts";
import { Router } from "./Router.tsx";

export function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Router />
        <GlobalStyle></GlobalStyle>
      </ThemeProvider>
    </BrowserRouter>
  );
}
