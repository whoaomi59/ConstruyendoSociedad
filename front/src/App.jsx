import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Home from "./pages/Home";
import LoaderPrimary from "./components/content/loader";
import Layout from "./components/layout/Layout";
import Login from "./pages/auth/login";
import Container from "./components/static/container";
import Dashboar from "./pages/admin/dashboard";
import Usuarios from "./pages/admin/usuarios";
import NotFount from "./components/static/notFount";
import { jwtDecode } from "jwt-decode";
import Empresa from "./pages/admin/empresa";
import Noticias from "./pages/admin/noticias";
import Restablecimiento from "./pages/auth/restablecimiento";
import Noticias_Img from "./pages/admin/noticias/complements/img";
import Noticias_Message from "./pages/admin/noticias/complements/message";
import Voluntariado from "./pages/admin/voluntariado";
import Causas from "./pages/admin/causas";

export const URL = "http://localhost/ConstruyendoSociedad/API/";
/* export const URL = "https://fundacionconstruyendosociedad.com/API/"; */

function App() {
  const [empresa, setEmpresa] = useState({});
  const [loader, setLoader] = useState(false);
  const [TokenUser, setTokenUser] = useState(false);

  axios.defaults.baseURL = URL;

  useEffect(() => {
    const Token = sessionStorage.getItem("token");
    if (Token) {
      try {
        const decoded = jwtDecode(Token);
        return setTokenUser(decoded);
      } catch (error) {
        return console.error("Error decodificando el token:", error);
      }
    }
  }, []);

  useEffect(() => {
    const Get = async () => {
      try {
        setLoader(true);
        const response = await axios.get("controllers/empresa.php");
        setEmpresa(response.data[0]);
      } catch (error) {
        console.warn(error);
      } finally {
        setLoader(false);
      }
    };
    Get();
  }, []);

  if (loader) {
    return <LoaderPrimary />;
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/au5Z4YhReMcxh1r0WdbGNrGiMU7+j6CfaUrMxP2TGJNv7ZgI72muOl1gie2Lc7da"
          element={<Login empresa={empresa} />}
        />
        <Route
          path="/au5Z4YhReMcxh1r0WdbGNrGiMU7+j6CfaUrMxP2TGJNv7ZgI72muOl1gie2Lc7dasdddss/:id"
          element={<Restablecimiento empresa={empresa} />}
        />
        <Route
          path="/"
          element={<Layout empresa={empresa} decoded={TokenUser} />}
        >
          <Route index element={<Home empresa={empresa} />} />
          <Route path="prueba" element={<div>prueba</div>} />
        </Route>

        <Route
          path="/admin"
          element={<Container empresa={empresa} decoded={TokenUser} />}
        >
          <Route index element={<Dashboar />} />
          <Route path="usuarios" element={<Usuarios />} />
          <Route path="empresa" element={<Empresa />} />
          <Route path="noticias" element={<Noticias decoded={TokenUser} />} />
          <Route path="noticias/img/:id" element={<Noticias_Img />} />
          <Route path="voluntariado" element={<Voluntariado />} />
          <Route path="causas" element={<Causas />} />
          <Route
            path="noticias/message/:id"
            element={<Noticias_Message decoded={TokenUser} />}
          />
        </Route>

        <Route path="*" element={<NotFount empresa={empresa} />} />
      </Routes>
    </Router>
  );
}

export default App;
