import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header";
import Navbar from "./components/layout/navbar";
import Home from "./pages/Home";
import LoaderPrimary from "./components/content/loader";
import Layout from "./components/layout/Layout";
import Login from "./pages/auth/login";

export const URL = "http://localhost/ConstruyendoSociedad/API/";

function App() {
  const [empresa, setEmpresa] = useState({});
  const [loader, setLoader] = useState(false);

  axios.defaults.baseURL = URL;

  useEffect(() => {
    const Get = async () => {
      try {
        setLoader(true);
        const response = await axios.get("controllers/empresa.php");
        setEmpresa(response.data[0]);
        return setLoader(false);
      } catch (error) {
        setLoader(false);
        console.warn(error);
      }
    };
    Get();
  }, []);

  if (loader) {
    return <LoaderPrimary />;
  }
  return (
    <>
      <Router>
        <Routes>
          {/* Ruta de login */}
          <Route
            path="/au5Z4YhReMcxh1r0WdbGNrGiMU7+j6CfaUrMxP2TGJNv7ZgI72muOl1gie2Lc7da"
            element={<Login />}
          />

          {/* Layout principal */}
          <Route path="/" element={<Layout empresa={empresa} />}>
            <Route index element={<Home empresa={empresa} />} />
            <Route path="prueba" element={<div>prueba</div>} />
          </Route>

          {/* Layout admin */}
          <Route path="/admin" element={<Layout empresa={empresa} />}>
            <Route path="prueba" element={<div>prueba</div>} />
          </Route>

          {/* Ruta para no encontrados */}
          <Route path="*" element={<div>Not Found</div>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
