import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobalStyles } from "./styles/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Global.js";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="login" element={<LoginPage />} />
          </Routes>
        </BrowserRouter>
      </>
    </ThemeProvider>
  );
}

export default App;
