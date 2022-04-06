import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Container, GlobalStyles } from "./styles/Global";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Global.js";
import LandingPage from "./components/pages/LandingPage";
import LoginPage from "./components/pages/LoginPage";
import NavBar from "./components/NavBar";
import React from "react";
import SearchModal from "./components/SearchModal";

import { useSelector } from "react-redux";
import { selectModal } from "./features/modal/modalSlice";
import { StyledOverlay } from "./styles/SearchModal.styled";
import PropertiesPage from "./components/pages/PropertiesPage";
import Property from "./components/pages/PropertyPage";
import ShowUsers from "./components/pages/ShowUsersPage";
import DashboardPage from "./components/pages/DashboardPage";
import Footer from "./components/Footer";
import SearchPage from "./components/pages/SearchPage";

export const MyContext = React.createContext();

function App() {
  const modal = useSelector(selectModal);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BrowserRouter>
        <>
          <NavBar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="properties" element={<PropertiesPage />} />
            <Route path="properties/:id" element={<Property />} />
            <Route path="users" element={<ShowUsers />} />
            <Route path="users/dashboard" element={<DashboardPage />} />
            <Route path="search" element={<SearchPage />} />
          </Routes>
          {modal.searchModal === true && (
            <div>
              <StyledOverlay></StyledOverlay>
              <SearchModal />
            </div>
          )}
          <Container>
            <Footer />
          </Container>
        </>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
