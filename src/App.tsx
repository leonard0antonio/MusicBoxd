import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { theme } from "./styles/theme";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/tela_principal/Layout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Register2Page from "./pages/Register2Page";
import MainPage from "./pages/MainPage";
import { ProfilePage } from "./pages/ProfilePage";
import TrendingPage from "./pages/TrendingPage";
import ExplorePage from "./pages/ExplorePage";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Routes>
          {/* Página de login */}
          <Route path="/login" element={<LoginPage />} />

          {/* Fluxo de registro */}
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/register/2" element={<Register2Page />} />

          {/* Página principal (home) */}
          <Route
            path="/"
            element={
              <Layout>
                <MainPage />
              </Layout>
            }
          />

          {/* Página de perfil (Profile) */}
          <Route
            path="/profile"
            element={
              <Layout>
                <ProfilePage />
              </Layout>
            }
          />

          {/* Página explorar (Explore) */}
          <Route
            path="/explore"
            element={
              <Layout>
                <ExplorePage />
              </Layout>
            }
          />

          {/* Página em alta (trending) */}
          <Route
            path="/trendig"
            element={
              <Layout>
                <TrendingPage />
              </Layout>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
