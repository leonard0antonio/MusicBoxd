import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/GlobalStyle";
import { theme } from "./styles/theme";
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from "./components/tela_principal/Layout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainPage from "./pages/MainPage";
import ProfilePage from "./pages/ProfilePage";

{/*#TODO: Verificar se a lógica do app está seguindo as normas segundo a documentação do React*/}
function App() {
  return (
 <ThemeProvider theme={theme}>
    <GlobalStyle />
     <Router>
      <Routes>

       <Route path="/login" element = {
        
        <LoginPage/>
        
        }
      />

       {/*#TODO FAZER COMPONENTE REGISTER*/}
        <Route path="/register" element = {
        
          <RegisterPage/>
        
        }
      />
       
         <Route path="/" 
         element={
         <Layout>
         <MainPage/> 
         </Layout>
        }  
        />


     {/*#TODO FAZER COMPONENTE profile*/}
      <Route path="/profile" element = {
        
       <ProfilePage/>
        
        }
      />
    

     
     
     </Routes>
    </Router>
  </ThemeProvider>
  );
}

export default App;
