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

export const URL = "http://localhost/ConstruyendoSociedad/API/";

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
        console.log(decoded);
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
        <Route path="/" element={<Layout empresa={empresa} />}>
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
        </Route>

        <Route path="*" element={<NotFount empresa={empresa} />} />
      </Routes>
    </Router>
  );
}

export default App;
