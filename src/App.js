import { BrowserRouter, Routes, Route } from "react-router-dom";

import { GlobalStyles } from "./styles/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Global.js";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import NavBar from "./components/NavBar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <BrowserRouter>
          <NavBar />
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
